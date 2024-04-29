import React, { useState } from 'react'
import { deletelist } from './endpoint'
import { patchlist } from './endpoint'

const Page2 = ({ item, rander, setRander }) => {
    const [alldelete, setAllDelete] = useState()

    const handledelete = async (id) => {
        try {
            const res = await deletelist(id)
            setAllDelete(res.data)
            setRander(!rander)

        } catch (err) {
            console.log(err, 'hhhgf')
        }
    }
    const handlepatch = async (taskId) => {
        await patchlist({ taskcompleted: false }, taskId)
        setRander(!rander)

    }
    return (
        <>
            <div
                style={{ backgroundColor: '#777', height: 100, marginTop: 20, width: '80%', margin: ' 10px auto',maginleft:60 }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ paddingBottom: 20 }}><span style={item.taskcompleted ? { color: '#ffa700',fontSize:40 } : { color: 'black', textDecoration: 'line-through' }}>{item.title}</span><br></br>
                        <span style={item.taskcompleted ? { color: '#ffa700' } : { color: '#ffa700', textDecoration:'line-through' }}>{item.description}</span></div>
                    <div style={{ padding: 30 }}><button style={{ backgroundColor: 'green', color: 'white', border: 'none', height: 40, width: 80, borderRadius: 10 }} onClick={()=>handlepatch(item._id)}>complete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => handledelete(item._id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', height: 40, width: 80, borderRadius: 10 }}>Delete</button></div>
                </div>  

            </div>

        </>
    )
}

export default Page2
