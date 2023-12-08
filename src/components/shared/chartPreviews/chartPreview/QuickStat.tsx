import { IChartPreview } from "../../../../shared/interfaces/chartPreview.interface";

interface Props {
    chartPreview: IChartPreview;
}

const ChartPreview = ({ chartPreview }: Props) => {
    return (
        <li className="col-sm-6 col-md-3">
            <div className="quick-stats__item">
                <div className="quick-stats__info">
                    <h2>{chartPreview.title}</h2>
                    <small>{chartPreview.subTitle}</small>
                </div>
                <svg className="peity" height="36" width="65"><rect data-value="5" fill="rgba(255,255,255,0.85)" x="0.8981818181818183" y="16" width="2.694545454545455" height="20"></rect><rect data-value="6" fill="rgba(255,255,255,0.85)" x="5.389090909090909" y="12" width="2.6945454545454552" height="24"></rect><rect data-value="3" fill="rgba(255,255,255,0.85)" x="9.88" y="24" width="2.6945454545454535" height="12"></rect><rect data-value="9" fill="rgba(255,255,255,0.85)" x="14.370909090909093" y="0" width="2.6945454545454535" height="36"></rect><rect data-value="7" fill="rgba(255,255,255,0.85)" x="18.86181818181818" y="8" width="2.6945454545454552" height="28"></rect><rect data-value="5" fill="rgba(255,255,255,0.85)" x="23.35272727272727" y="16" width="2.6945454545454552" height="20"></rect><rect data-value="4" fill="rgba(255,255,255,0.85)" x="27.84363636363636" y="20" width="2.6945454545454552" height="16"></rect><rect data-value="6" fill="rgba(255,255,255,0.85)" x="32.334545454545456" y="12" width="2.6945454545454552" height="24"></rect><rect data-value="5" fill="rgba(255,255,255,0.85)" x="36.82545454545454" y="16" width="2.6945454545454623" height="20"></rect><rect data-value="6" fill="rgba(255,255,255,0.85)" x="41.31636363636363" y="12" width="2.6945454545454552" height="24"></rect><rect data-value="4" fill="rgba(255,255,255,0.85)" x="45.807272727272725" y="20" width="2.6945454545454552" height="16"></rect></svg>
            </div>
        </li>
    );
}

export default ChartPreview;