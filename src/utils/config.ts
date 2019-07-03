export default class Config {
  market: {
    id: number;
    color: string;
    name: string;
  };
  restServer: { url: string; wsURL: string, authURL: string };
  accountServer: { url: string };

  constructor() {
    this.market = {
      id: 1,
      color: 'danger',
      name: 'Un Market'
    };
    this.restServer = {
      url: 'https://api-market1-stockchainz.serveo.net/api',
      wsURL: 'wss://api-market1-stockchainz.serveo.net',
      authURL: 'https://api-market1-stockchainz.serveo.net/auth'
    };

    this.accountServer = {
      url: 'https://account-market1-stockchainz.serveo.net/api'
    };
  }
}
