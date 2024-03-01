import items from "../projectData";

export default function Page({ params }) {
  const item = items.filter((item) => item.id === parseInt(params.id));
  let a = JSON.stringify(item);

  return <div className=""></div>;
}
