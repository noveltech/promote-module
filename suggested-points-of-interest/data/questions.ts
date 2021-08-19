export interface Question {
  id: number;
  question: string;
  categoryIds: string[];
  cityGuideCategoryIds: number[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'RECOMMENDED_PLACES_WHERE_SHOULD_I_GO_TO_EAT',
    categoryIds: [
      '4bf58dd8d48988d10e941735',
      '53d6c1b0e4b02351e88a83d2',
      '53d6c1b0e4b02351e88a83da',
      '4bf58dd8d48988d1ca941735',
      '4bf58dd8d48988d1d0941735',
      '4bf58dd8d48988d143941735',
      '4bf58dd8d48988d1ce941735',
      '4bf58dd8d48988d1c9941735',
      '4d4b7105d754a06374d81259',
      '53d6c1b0e4b02351e88a83d8',
      '52f2ab2ebcbc57f1066b8b45',
      '4bf58dd8d48988d10b941735',
      '4bf58dd8d48988d10c941735',
      '4bf58dd8d48988d1c0941735',
      '4bf58dd8d48988d1c4941735',
      '4bf58dd8d48988d1c5941735',
      '4bf58dd8d48988d1c7941735',
      '4bf58dd8d48988d1df931735',
      '52e81612bcbc57f1066b79f3',
      '52e81612bcbc57f1066b7a00',
      '53d6c1b0e4b02351e88a83d4',
      '53d6c1b0e4b02351e88a83d6',
      '56aa371be4b08b9a8d57350b',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 2,
    question: 'RECOMMENDED_PLACES_WHERE_SHOULD_I_GO_TO_DRINK_A_COFFEE',
    categoryIds: [
      '4bf58dd8d48988d16d941735',
      '4bf58dd8d48988d143941735',
      '4bf58dd8d48988d16a941735',
      '4bf58dd8d48988d121941735',
      '4bf58dd8d48988d1e0931735',
      '53d6c1b0e4b02351e88a83e6',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 3,
    question:
      'RECOMMENDED_PLACES_WHERE_SHOULD_I_GO_TO_HAVE_A_DRINK_IN_THE_EVENING',
    categoryIds: [
      '4bf58dd8d48988d116941735',
      '4bf58dd8d48988d11e941735',
      '52e81612bcbc57f1066b7a0d',
      '4bf58dd8d48988d11f941735',
      '4bf58dd8d48988d11a941735',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 4,
    question: 'RECOMMENDED_PLACES_WHERE_SHOULD_I_GO_FOR_A_SWIM',
    categoryIds: [
      '4bf58dd8d48988d1e2941735',
      '52e81612bcbc57f1066b7a0d',
      '52e81612bcbc57f1066b7a30',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 5,
    question: 'RECOMMENDED_PLACES_WHERE_SHOULD_I_GO_SHOPPING',
    categoryIds: [
      '4bf58dd8d48988d128951735',
      '50be8ee891d4fa8dcc7199a7',
      '4bf58dd8d48988d10f951735',
      '4d954b0ea243a5684a65b473',
      '4bf58dd8d48988d104951735',
      '4bf58dd8d48988d10c951735',
      '4bf58dd8d48988d127951735',
      '4bf58dd8d48988d1ed941735',
      '4bf58dd8d48988d1ff941735',
      '52e816a6bcbc57f1066b7a54',
      '52f2ab2ebcbc57f1066b8b1a',
      '52f2ab2ebcbc57f1066b8b1b',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 6,
    question: 'RECOMMENDED_PLACES_WHERE_SHOULD_I_GO_FOR_SIGHTSEEING',
    categoryIds: [
      '4bf58dd8d48988d132941735',
      '50aaa4314b90af0d42d5de10',
      '50aaa49e4b90af0d42d5de11',
      '52e81612bcbc57f1066b7a40',
      '4bf58dd8d48988d12d941735',
      '4deefb944765f83613cdba6e',
      '4eb1d4d54b900d56c88a45fc',
      '52e81612bcbc57f1066b7a22',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 7,
    question: 'RECOMMENDED_PLACES_WHERE_CAN_I_FIND_A_GAS_STATION',
    categoryIds: ['4bf58dd8d48988d113951735'],
    cityGuideCategoryIds: [],
  },
  {
    id: 8,
    question: 'RECOMMENDED_PLACES_WHERE_CAN_I_RENT_A_CAR_OR_A_MOTORCYCLE',
    categoryIds: ['4bf58dd8d48988d1ef941735', '4bf58dd8d48988d124951735'],
    cityGuideCategoryIds: [],
  },
  {
    id: 9,
    question:
      'RECOMMENDED_PLACES_WHERE_SHOULD_I_GO_FOR_SPORTS_OR_WATER_ACTIVITIES',
    categoryIds: [
      '4bf58dd8d48988d162941735',
      '4bf58dd8d48988d1f1931735',
      '4bf58dd8d48988d102941735',
      '4bf58dd8d48988d1e3941735',
      '50328a4b91d4c4b30a586d6b',
      '52e81612bcbc57f1066b7a12',
      '52f2ab2ebcbc57f1066b8b1a',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 10,
    question:
      'RECOMMENDED_PLACES_WHERE_CAN_I_FIND_TRADITIONAL_FEASTS_FESTIVALS',
    categoryIds: ['4bf58dd8d48988d164941735'],
    cityGuideCategoryIds: [],
  },
  {
    id: 11,
    question: 'RECOMMENDED_PLACES_WHERE_CAN_I_FIND_INFORMATION_ABOUT_FERRIES',
    categoryIds: [
      '4bf58dd8d48988d12d951735',
      '4d4b7105d754a06379d81259',
      '4bf58dd8d48988d1f6931735',
      '4f04b08c2fb6e1c99f3db0bd',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 12,
    question: 'RECOMMENDED_PLACES_WHERE_CAN_I_BUY_FOOD_SUPPLIES',
    categoryIds: [
      '4bf58dd8d48988d16a941735',
      '4bf58dd8d48988d1c9941735',
      '4bf58dd8d48988d1e0931735',
      '4d4b7105d754a06374d81259',
      '52f2ab2ebcbc57f1066b8b45',
      '4bf58dd8d48988d118951735',
      '50aa9e744b90af0d42d5de0e',
      '52e81612bcbc57f1066b79f3',
      '56aa371be4b08b9a8d57350b',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 13,
    question: 'RECOMMENDED_PLACES_WHERE_CAN_I_FIND_A_BANK',
    categoryIds: ['4bf58dd8d48988d10a951735'],
    cityGuideCategoryIds: [],
  },
  {
    id: 14,
    question: 'RECOMMENDED_PLACES_WHERE_CAN_I_GET_MEDICAL_HELP',
    categoryIds: [
      '4bf58dd8d48988d10f951735',
      '4bf58dd8d48988d194941735',
      '4bf58dd8d48988d196941735',
      '4bf58dd8d48988d1ed941735',
      '5745c2e4498e11e7bccabdbd',
    ],
    cityGuideCategoryIds: [],
  },
  {
    id: 15,
    question: 'RECOMMENDED_PLACES_WHERE_CAN_I_FIND_A_BUS_STATION',
    categoryIds: ['4bf58dd8d48988d1f9931735', '4bf58dd8d48988d1fe931735'],
    cityGuideCategoryIds: [],
  },
];

export default [...questions];
