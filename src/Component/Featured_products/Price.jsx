/* eslint-disable react/prop-types */

export default function Price({oldCost , newCost}) {
  return (
    <div>
      <span> {oldCost}&nbsp; </span>
      <span style={{ color:"green",fontSize:"0.9rem" , textDecoration: "line-through"}}>{newCost}</span>
    </div>
  )
}
