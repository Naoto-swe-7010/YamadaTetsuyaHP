export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '山田哲也',
    alternateName: 'Tetsuya Yamada',
    description: 'カナダでLAオリンピック日本代表を目指して挑戦している日本のラクロス選手',
    url: 'https://tetsuya-yamada.com',
    image: 'https://tetsuya-yamada.com/Image1.jpg',
    sameAs: [
      'https://www.instagram.com/tetsu.yamada94/'
    ],
    jobTitle: 'ラクロス選手',
    worksFor: [
      {
        '@type': 'SportsTeam',
        name: 'FALCONS LACROSSE CLUB',
        location: {
          '@type': 'Place',
          name: '日本'
        }
      },
      {
        '@type': 'SportsTeam', 
        name: 'Hamilton Sr.B Bengals',
        location: {
          '@type': 'Place',
          name: 'カナダ'
        }
      }
    ],
    birthDate: '2000-11-20',
    birthPlace: {
      '@type': 'Place',
      name: '東京都江戸川区',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '江戸川区',
        addressRegion: '東京都',
        addressCountry: 'JP'
      }
    },
    sport: 'ラクロス',
    award: [
      '関東学生リーグ部1部昇格',
      '22歳以下日本代表',
      '2023年男子ラクロス日本代表(練習生)'
    ],
    knowsAbout: [
      'ラクロス',
      'スポーツ',
      'オリンピック',
      '国際競技',
      '日本代表'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}