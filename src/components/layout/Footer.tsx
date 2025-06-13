import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/90 border-t border-white/10">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold text-white hover:text-accent-400 transition-colors duration-200 inline-block mb-4"
            >
              <span className="text-accent-400">
                TETSUYA
              </span>
              <span className="ml-2 text-white">YAMADA</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              カナダでLAオリンピック日本代表を目指して挑戦している山田哲也の公式サイトです。
              夢を持ち、実現に向け一歩踏み出す勇気を発信しています。
            </p>
            <div className="flex space-x-4">
            <a
                href="https://www.instagram.com/tetsu.yamada94/"
                className="hover:text-violet-300"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram Logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  プロフィール
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  ブログ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">挑戦内容</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>🥍 2028年LAオリンピック日本代表</li>
              <li>🇨🇦 カナダでの修行</li>
              <li>🇯🇵 ラクロス日本代表経験</li>
              <li>💪 継続的な成長と挑戦</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tetsuya Yamada. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            夢を持ち、実現に向け一歩踏み出す勇気！！
          </p>
        </div>
      </div>
    </footer>
  );
}