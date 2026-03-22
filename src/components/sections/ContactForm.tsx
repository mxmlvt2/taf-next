'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/types';

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://trimsandfasteners.com/wp-json/contact-form-7/v1/contact-forms/1647/feedback', {
        method: 'POST',
        body: new URLSearchParams({
          'your-name': form.name,
          'your-email': form.email,
          'your-company': form.company,
          'your-message': form.message,
          '_wpcf7_locale': locale,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-[Jost] text-gray-700">{t('success')}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">{t('name')} *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">{t('email')} *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">{t('company')}</label>
        <input
          type="text"
          value={form.company}
          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 font-[Jost] mb-1">{t('message')} *</label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-[Jost] focus:outline-none focus:border-black transition-colors resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm font-[Jost]">{t('error')}</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-black text-white font-[Jost] font-medium text-sm py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>
    </form>
  );
}
