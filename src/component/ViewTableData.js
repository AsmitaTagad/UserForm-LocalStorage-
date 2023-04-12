import React from 'react';
import styleTable from './ViewData.module.css';

export default function ViewTableData({ formData, RemoveData }) {
    return (
        <div>
            <div className={styleTable.TableData}>
                {
                    <table className={styleTable.twrapper}>
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>Email id</th>
                                <th>Password</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((form) => {
                                return (
                                    <tr key={form.password}>
                                        <td>{form.userName}</td>
                                        <td>{form.email}</td>
                                        <td>{form.Password}</td>
                                        <td
                                            className="dle"
                                            onClick={() => RemoveData(form.Password)}
                                        >
                                            ❌
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
                  
                
            </div>


        </div>
    );
}
