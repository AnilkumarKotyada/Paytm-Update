"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { createOnRampTransaction } from "../app/lib/actions/createOnrampTransaction";

const SUPPORTED_BANKS = [
    {
        name: "HDFC Bank",
        redirectUrl: "https://netbanking.hdfcbank.com",
    },
    {
        name: "Axis Bank",
        redirectUrl: "https://www.axisbank.com/",
    },
    {
        name: "SBI Bank",
        redirectUrl: "https://www.onlinesbi.sbi/",
    },
];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [value, setValue] = useState(0);

    return (
        <Card title="Add Money">
            <div className="w-full">
                <TextInput
                    label={"Amount"}
                    placeholder={"Amount"}
                    onChange={(value) => {
                        setValue(Number(value));
                    }}
                />
                <div className="py-4 text-left">Bank</div>
                <Select
                    onSelect={(value) => {
                        const selectedBank = SUPPORTED_BANKS.find((x) => x.name === value);
                        if (selectedBank) {
                            setRedirectUrl(selectedBank.redirectUrl || "");
                            setProvider(selectedBank.name || "");
                        }
                    }}
                    options={SUPPORTED_BANKS.map((bank) => ({
                        key: bank.name, // Use the bank name as the key
                        value: bank.name,
                    }))}
                />

                <div className="flex justify-center pt-4">
                    <Button
                        appName="Paytm"
                        onClick={async () => {
                            await createOnRampTransaction(provider, value);
                            window.location.href = redirectUrl || "";
                        }}
                    >
                        Add Money
                    </Button>
                </div>
            </div>
        </Card>
    );
};
