import { subscription } from "../../../shared/data/subscription.data";
import ChartPreviews from "../../shared/chartPreviews/ChartPreviews";
import Header from "../../shared/header/Header";
import News from "../../shared/news/News";
import Subscription from "../../shared/subscription/Subscription";
import Chart from "../../shared/chart/Chart";

const Main = () => {
    return (
        <section className="content">
            <Header className="content__title">
                <h1>Dashboard <small>Welcome to the unique SuperAdmin web app experience!</small></h1>
            </Header>
            <ChartPreviews />
            <div className="row">
                <div className="col-lg-6">
                    <News />
                </div>
                <div className="col-lg-6">
                    <Subscription subscription={subscription} />
                    <Chart />
                </div>
            </div>
        </section>
    );
}

export default Main;