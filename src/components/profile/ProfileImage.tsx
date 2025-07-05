import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl shadow-accent-400/20 animate-fade-in">
        <Image
          src="/Img9.jpg"
          alt="山田哲也選手のプロフィール写真"
          width={320}
          height={320}
          className="object-cover hover:scale-125 transition-transform duration-500"
          priority
        />
      </div>
      
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <div className="bg-gray-800 px-6 py-3 md:px-10 md:py-4 rounded-full shadow-2xl">
          <p className="text-white font-bold text-lg sm:text-xl md:text-2xl">🇯🇵 Tetsuya Yamada 🇨🇦 </p>
        </div>
      </div>
    </div>
  );
}