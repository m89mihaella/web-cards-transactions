import { Card, Transaction } from "../types/types";

export async function getCards(): Promise<Card[] | []> {
  const cards = await import("../data/cards.json");
  if (!cards) {
    return [];
  } 
  return cards.default;
}

export async function getTransactions(cardId: string): Promise<Transaction[]> {
  const transactions = await import("../data/transactions.json");
  return transactions.default[cardId as keyof typeof transactions.default] || [];
}
