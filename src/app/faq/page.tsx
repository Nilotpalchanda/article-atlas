import { FAQ_SCREEN_METADATA } from './metadata';
import { Metadata } from 'next';

export const metadata: Metadata = { ...FAQ_SCREEN_METADATA };

const faqs = [
  {
    question: 'What is this blog about?',
    answer:
      'Our blog covers a wide range of topics including web development, programming tutorials, tech news, and productivity tips to help you stay ahead in the digital world.',
  },
  {
    question: 'How often is new content published?',
    answer:
      'We publish fresh articles every week, ensuring you always have something new and insightful to read.',
  },
  {
    question: 'Can I contribute to the blog?',
    answer:
      "Absolutely! We welcome guest posts from passionate writers. Please visit our 'Contribute' page for guidelines and submission details.",
  },
  {
    question: 'How can I stay updated with the latest posts?',
    answer:
      'Subscribe to our newsletter or follow us on social media to receive instant updates on new articles and features.',
  },
  {
    question: 'Is the content free to access?',
    answer:
      'Yes, all our blog content is freely accessible. We believe in sharing knowledge with the community.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-purple-100 to-blue-50 p-8 shadow-md transition-shadow hover:shadow-xl">
      <h2 className="mb-3 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent">
        {question}
      </h2>
      <p className="text-lg leading-relaxed text-gray-700">{answer}</p>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="mb-20 max-w-6xl px-4 pt-12">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-12 shadow-sm transition-shadow hover:shadow-md">
        <h1 className="mb-10 text-center text-4xl font-extrabold text-purple-700 drop-shadow-lg">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
