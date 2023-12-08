import { useEffect, useState } from "react";
import { ISubscription } from "../../../shared/interfaces/subscription.interface";
import { SUBSCRIPTION_COST } from "../../../constants/index.constants";
import Button from "../../ui/button/Button";
import './Subscription.scss';

interface Props {
    subscription: ISubscription;
}

const Subscription = ({ subscription }: Props) => {
    const [daysLeft, setDaysLeft] = useState<number | null>(null);
    const [isRenewalVisible, setIsRenewalVisible] = useState<boolean>(false);

    useEffect(() => {
        const now = Math.floor(Date.now() / 1000);
        const secondsLeft = subscription.endTimestamp - now;
        const daysLeft = Math.ceil(secondsLeft / (24 * 60 * 60));
        setDaysLeft(daysLeft);
    }, [subscription]);

    const handleRenewal = async () => {
        console.log('Initiating renewal process...');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Renewal process complete. Subscription extended.');
    }
    
    const handlePayment = async () => {
        console.log('Initiating payment process...');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Payment process complete. Subscription activated.');
    }

    return (
        <div className="card subscription">
            <div className="card-body">
                <div>
                    {subscription.payed ? (
                        <>
                            <p className="subscription__period">{`Days left: ${daysLeft}`}</p>
                            <Button onClick={() => setIsRenewalVisible(true)}>Renew subscription</Button>
                        </>
                    ) : (
                        <>
                            <p className="subscription__period">{`Subscription cost: $${SUBSCRIPTION_COST} per month`}</p>
                            <Button onClick={() => handlePayment()}>Subscribe now</Button>
                        </>
                    )}

                    {isRenewalVisible && (
                        <>
                            <p className="subscription__period">{`Renewal cost: $${SUBSCRIPTION_COST} per month`}</p>
                            <Button onClick={() => handleRenewal()}>Renew now</Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Subscription;