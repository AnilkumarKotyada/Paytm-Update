import { Card } from "@repo/ui/card";

interface BalanceCardProps {
    amount: number;
    locked: number;
}

export const BalanceCard = ({ amount, locked }: BalanceCardProps) => {
    // Helper function to format amounts as currency with two decimal places
    const formatCurrency = (value: number) =>
        (value / 100).toLocaleString("en-IN", { style: "currency", currency: "INR" });

    return (
        <Card title="Balance">
            <div className="flex justify-between border-b border-slate-300 pb-2">
                <div>Unlocked Balance</div>
                <div aria-label={`Unlocked balance: ${formatCurrency(amount)}`}>
                    {formatCurrency(amount)}
                </div>
            </div>
            <div className="flex justify-between border-b border-slate-300 py-2">
                <div>Total Locked Balance</div>
                <div aria-label={`Locked balance: ${formatCurrency(locked)}`}>
                    {formatCurrency(locked)}
                </div>
            </div>
            <div className="flex justify-between border-b border-slate-300 py-2">
                <div>Total Balance</div>
                <div aria-label={`Total balance: ${formatCurrency(locked + amount)}`}>
                    {formatCurrency(locked + amount)}
                </div>
            </div>
        </Card>
    );
};
