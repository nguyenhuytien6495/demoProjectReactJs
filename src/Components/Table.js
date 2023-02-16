import React from "react";

export default function Table({ list }) {
  console.log(list);
  //   const data = list.map((item) => {
  //     return (
  //       <>
  //         <tr key={item.id}>
  //           <th>{item.id}</th>
  //           <th>{item.name}</th>
  //         </tr>
  //       </>
  //     );
  //   });
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {/* {data} */}
          {/* <tr>
            <th scope="row"></th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
