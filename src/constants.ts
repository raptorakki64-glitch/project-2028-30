export interface MangoVariety {
  id: string;
  name: string;
  origin: string;
  tasteProfile: {
    sweetness: number; // 1-5
    texture: string;
  };
  description: string;
  harvestSeason: string;
  nutrition: string[];
  image: string;
}

export const MANGO_VARIETIES: MangoVariety[] = [
  {
    id: 'alphonso',
    name: 'Alphonso',
    origin: 'Ratnagiri, Maharashtra',
    tasteProfile: { sweetness: 5, texture: 'Creamy, rich, fiberless' },
    description: 'Known as the "King of Mangoes," the Alphonso is prized for its sunshine-yellow skin and incredibly rich, deep orange pulp. It has a distinctive aroma that can fill a room.',
    harvestSeason: 'April - May',
    nutrition: ['Vitamin A', 'Vitamin C', 'Potassium'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_k0U27BdQ7YA4sQcuhOhzO71_AZQhPU4eH1OgW-B3Z5w3e4vzNCCvOe2dTub63TvFS248M83Sm_IBVZYP3sd5Ix_9bX-UP2LTBz3kUh2KFu14SZTzXlbf9Rdj1yFx3rpDk2U9UfAMHVsxP7u3ZhzB0fspxVucK8S0uTNmWH4Sn9XB7cG8_egHZ98YnorCBBuSAKiws96g9nrppyXhm5ZOAL6h6z6ICMPiQ3cN0Ezz8qkaRnAwOTWNZOnYR0vIDnv0Y-ZdsEcKGIl'
  },
  {
    id: 'kesar',
    name: 'Kesar',
    origin: 'Gir, Gujarat',
    tasteProfile: { sweetness: 4, texture: 'Smooth, firm' },
    description: 'The "Queen of Mangoes," Kesar is famous for its bright orange pulp and intense fragrance. It is often used for making traditional desserts like Aamras.',
    harvestSeason: 'May - June',
    nutrition: ['Antioxidants', 'Fibre', 'Magnesium'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl1WBTEQYBeubM1t3frAD9jA4YyM0fZMx-zWSZPajb3taRdRVhnkEqNQQmR2cm4oeD9NdzpstmUZiVSYchReAEbsYctSaps3uWy4j1QdkEZE3_bTwHPrPavKaHhGv9WcBt5skBLxcqyBq9jdT2umfrl9ElbO0RkAjcweGRvuj_7mnJAUgF7TRSAmTyUcqXajqYA3wZDKqAsccLb_O-bzKBMnoZLqsSWZ5DR8XGF-M0YUFHJsDzsntkNeC2BJSI-6LY9z-XYt-8ODaV'
  },
  {
    id: 'banganapalli',
    name: 'Banganapalli',
    origin: 'Andhra Pradesh',
    tasteProfile: { sweetness: 4, texture: 'Firm yet tender' },
    description: 'The pride of South India, these large, oval mangoes are significantly less fibrous and have a thin skin. Their balance of sweetness and tang is legendary.',
    harvestSeason: 'May - July',
    nutrition: ['Vitamin B6', 'Vitamin E', 'Iron'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr0pP7kjha6pYPY1oveWzsNULsNoEACRPLAefWeZspyc2bZcWR24m6mTJ7Wk_JH44UaUTFfnJ_nP9Lz1Mv7h7h6meNNQU6EuJmQOWv6rkSVweI1WCH8TX1QVI2kgQrl2IPN3gcp-cLiszd5THp3A_zZs-ue-7-MluRUeN9lBSzU1tUBYL9f58w_g_bFL46T-6U_GKPYyYMoJw2ToXUhhIlxP_M1hbRtyhByeSDDmVg2YWtH1_4MthejFMqEvuEclaR_waBZMZEzE75'
  },
  {
    id: 'rasalu',
    name: 'Rasalu',
    origin: 'Andhra Pradesh',
    tasteProfile: { sweetness: 5, texture: 'Extremely juicy, fibrous' },
    description: 'The juice king of mangoes. Rasalu is famous for its thin skin and incredible amount of sweet juice. It is traditionally eaten by squeezing the whole fruit and drinking the pulp directly.',
    harvestSeason: 'May - June',
    nutrition: ['Vitamin C', 'Potassium', 'Dietary Fibre'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo6jDWZ60qbAMbKpPGxVmYcIlpQBU6jeB7X310NNc8DYr8H2rlICP0J-4MlXtqrptyskzGak9QFDP9tFAZ0F8DpR-5zn_hphfgdCFgs9Ogmy_D7JOAKsOJM8ngNUfGHFWiJjrOn6wVOatdK01WGrcHKx3uqUgdOxKCa8YCNlofSa87t6wqknGH7ZgX3V09BOyo2r9lMwSt2g4SxQlZSE7nSNdteRTJYIvUoiReoqIE7t70zD9TEEa_e38iTW0m1Tmd3cGRAexA_IUU'
  }
];
