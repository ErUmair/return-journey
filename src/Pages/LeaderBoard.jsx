import React from 'react'
import { useSelector } from 'react-redux'

const LeaderBoard = () => {
  const userState = useSelector(state => state.users);
  return (
    <div className='container mt-4'>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            userState.length > 0
              ?
              userState.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.score || 0}</td>
                  </tr>
                </>
              ))
              :
              null
          }

        </tbody>
      </table></div>
  )
}

export default LeaderBoard