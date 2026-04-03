import { Map } from "./map"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <LazyDiv className="card location">
      <h2>오시는 길</h2>
      <div className="addr">
        {LOCATION}
        <div className="detail">{LOCATION_ADDRESS}</div>
      </div>
      <Map />
    </LazyDiv>
  )
}
