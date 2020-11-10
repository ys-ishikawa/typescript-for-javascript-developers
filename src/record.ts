export {};

//  Record<K, T> : Kはunion型

type Prefectures = 'Tokyo' | 'Kanagawa' | 'Okinawa' | 'Chiba';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Kanagawa: { kanji_name: '神奈川', confirmed_cases: 720 },
  Okinawa: { kanji_name: '沖縄', confirmed_cases: 200 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 500 },
};
