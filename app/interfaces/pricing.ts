export interface plan {
  usd_amount: string;
  recurring_token: token;
  new_subscription_token: token;
  recurring_interval: string;
}

export interface token {
  usd_amount: string | null;
  token_amount: string;
  display_html: string | null;
  tags: string | null;
}

export interface consumption {
  token_amount: string;
  operation: string;
}
