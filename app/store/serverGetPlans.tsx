const defaultPlans = {
  MONTH: {
    usd_amount: '19.99',
    recurring_token: {
      usd_amount: null,
      token_amount: '3000',
      display_html: null,
      tags: null,
    },
    new_subscription_token: {
      usd_amount: null,
      token_amount: '0',
      display_html: null,
      tags: null,
    },
    recurring_interval: 'MONTH',
  },
  YEAR: {
    usd_amount: '139.99',
    recurring_token: {
      usd_amount: null,
      token_amount: '3000',
      display_html: null,
      tags: null,
    },
    new_subscription_token: {
      usd_amount: null,
      token_amount: '20000',
      display_html: null,
      tags: null,
    },
    recurring_interval: 'YEAR',
  },
};

const defaultTokens = [
  {
    usd_amount: '20',
    token_amount: '4000',
    display_html: '<div><h1>1,000</h1><h1>Gems</h1></div>',
    tags: null,
  },
  {
    usd_amount: '36',
    token_amount: '6000',
    display_html: '<div><h1>4,000<span>+1000</span></h1><h1>Gems</h1></div>',
    tags: null,
  },
  {
    usd_amount: '40',
    token_amount: '7000',
    display_html: '<div><h1>4,000<span>+1000</span></h1><h1>Gems</h1></div>',
    tags: null,
  },
  {
    usd_amount: '60',
    token_amount: '15000',
    display_html: '<div><h1>4,000<span>+1000</span></h1><h1>Gems</h1></div>',
    tags: 'most_popular',
  },
  {
    usd_amount: '130',
    token_amount: '45000',
    display_html: '<div><h1>4,000<span>+1000</span></h1><h1>Gems</h1></div>',
    tags: null,
  },
  {
    usd_amount: '400',
    token_amount: '1000000',
    display_html:
      '<div><h1>1,000,000<span>+100,000</span></h1><h1>Gems</h1></div>',
    tags: null,
  },
];

const defaultConsumptions = {
  UNDRESS: 50,
  UNDRESS_PRO: 100,
  GENERATE: 25,
  HENTAI: 25,
};

export const usePrices = async () => {
  let plans = defaultPlans;
  let tokens = defaultTokens;
  let consumptions = defaultConsumptions;
  return { plans, tokens, consumptions };
};

export default usePrices;
