interface StatusProps {
  status: "loading" | "error" | "succes";
}

export default function Status({ status }: StatusProps) {
  let message: string = "";

  if (status === "loading") message = "Loading.. ";
  else if (status === "succes") message = "Data Fached succeessfully!";
  else if (status === "error") message = "Error Fetching data";

  return (
    <div>
      {/* <h2>Loading..</h2>
      <h2>Data Fached succeessfully!</h2>
      <h2>Error Fetching data</h2> */}
      <h2>{message}</h2>
    </div>
  );
}
