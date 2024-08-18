"use client"
// Remember to index the User model on MongoDB 
import { useQuery } from "@tanstack/react-query";

const Board = () => {
     

        const { data, error, isLoading } = useQuery({
          queryKey : ['Leaderboard'],
          queryFn: () => fetch('api/getLeaderboard').then((response) =>
          response.json(),
          
        )},
        );
 
    
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading leaderboard</div>;


  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Streak</th>
      </tr>
    </thead>
    <tbody >
      {/* row 1 */}
      {data.map((user, index) => (
        <tr className="hover" key={user.email}>
        <th>{index +1 }</th>
        <td>{user.name}</td>
        <td> {user.email}</td>
        <td className="text-primary font-medium">{user.streak}</td>
      </tr>

      ))}
      
      {/* row 2 */}
      {/* <tr className='hover'>
        <th>2</th>
         <td>Michael Kwame</td>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr> */}
      {/* row 3 */}
      {/* <tr className='hover'>
        <th>3</th>
        <td>Enoch Damtse</td>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
    </tbody>
  </table>
</div>
  )
}

export default Board