import prisma from "@repo/db/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function() {
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();
    return (
        <div className="w-screen px-4 pt-2"> {/* Added horizontal padding */}
            <div className="text-3xl text-[#6a51a6] pt-4 mb-6 font-bold text-between"> {/* Reduced font size */}
                Transfer
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> {/* Responsive grid */}
                <div className="flex flex-col items-center"> {/* Center AddMoney component */}
                    <AddMoney />
                </div>
                <div className="flex flex-col items-center"> {/* Center BalanceCard and transactions */}
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                    <div className="pt-4">
                        <OnRampTransactions transactions={transactions} />
                    </div>
                </div>
            </div>
        </div>
    );
}    