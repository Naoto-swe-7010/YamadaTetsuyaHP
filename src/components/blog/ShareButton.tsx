'use client';

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      if (navigator.share) {
        navigator.share({
          title: title,
          url: currentUrl,
        });
      } else {
        navigator.clipboard.writeText(currentUrl);
        alert('URLをクリップボードにコピーしました');
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="text-accent-400 hover:text-accent-300 transition-colors duration-200"
      aria-label="記事をシェア"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
      </svg>
    </button>
  );
}