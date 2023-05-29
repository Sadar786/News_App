import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="todo-app">
        <div className="header">
          <h1>My To-Do List</h1>
          <div className="filter">
            <input type="text" placeholder="Search" className="search-input" />
            <select className="tag-select">
              <option value="">All Tags</option>
              <option value="groceries">Groceries</option>
              <option value="work">Work</option>
            </select>
            <select className="status-select">
              <option value="">All Statuses</option>
              <option value="OPEN">Open</option>
              <option value="WORKING">Working</option>
            </select>
          </div>
          <button className="add-button">Add Item</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Timestamp Created</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Tag</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/02/2023 12:34:56</td>
              <td>Buy groceries</td>
              <td>Get milk, bread, and eggs</td>
              <td>12/03/2023</td>
              <td>Groceries</td>
              <td>OPEN</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
            <tr>
              <td>12/02/2023 12:34:56</td>
              <td>Buy groceries</td>
              <td>Get milk, bread, and eggs</td>
              <td>12/03/2023</td>
              <td>Groceries</td>
              <td>OPEN</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
            <tr>
              <td>12/02/2023 12:34:56</td>
              <td>Buy groceries</td>
              <td>Get milk, bread, and eggs</td>
              <td>12/03/2023</td>
              <td>Groceries</td>
              <td>OPEN</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
            <tr>
              <td>12/02/2023 12:34:56</td>
              <td>Buy groceries</td>
              <td>Get milk, bread, and eggs</td>
              <td>12/03/202
              3</td>
<td>Groceries</td>
<td>OPEN</td>
<td>
<button className="edit-button">Edit</button>
<button className="delete-button">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
);
}
}