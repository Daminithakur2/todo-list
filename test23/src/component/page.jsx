import React, { useEffect, useState } from 'react'
import { deletelist, getlist, postlist } from './endpoint'
import Page2 from './page2'

const Page = () => {
    const [allget, setAllGet] = useState()
    const [rander, setRander] = useState(false)
    const [allpost, setAllPost] = useState({
        title: "",
        description: ""
    })
    const handleget = async () => {
        try {
            const res = await getlist()
            setAllGet(res.data);

        } catch (err) {
            console.log(err, 'err')
        }
    }
    const handlepost = async () => {
        try {
            await postlist(allpost)
            setRander(!rander)
            // handleget()

        } catch (err) {
            console.log(err, "ggg")
        }
    }



    useEffect(() => {
        handleget()
    }, [rander])

    return (
        <>
            <div style={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 50 }}>
                <div style={{ backgroundColor: '#333', width: 870, borderRadius: 10 }}>
                    <span style={{ color: 'white', fontSize: 40, margin: 30 }}>MY TODOS LIST</span>
                    <div style={{ backgroundColor: '#777', height: 100, display: 'flex', justifyContent: 'space-around', margin: " 10px auto", width: '80%' }}>
                        <div style={{ padding: 20 }}><label style={{ display: 'block', textAlign: 'left' }}>Title</label>
                            <input value={allpost.title} onChange={(e) => setAllPost({ ...allpost, title: e.target.value })} style={{ height: 30, width: 170, border: 'none', borderRadius: 10 }} type="text" placeholder='Title' /></div>
                        <div style={{ padding: 20 }}><label style={{
                            display: 'flex',
                            textAlign: 'left'
                        }}>Description</label>
                            <input value={allpost.description} onChange={(e) => setAllPost({ ...allpost, description: e.target.value })} style={{ height: 30, width: 170, border: 'none', borderRadius: 10 }} type="text" placeholder='Description' /></div>
                        <div style={{ padding: 40 }}><button onClick={() => { handlepost() }} style={{ backgroundColor: '#ffa700', height: 30, width: 100, border: 'none', borderRadius: 10 }}>ADD TODO</button></div>


                    </div>
                    {allget?.length ? allget.map((item, index) => {

                        return (
                            <>
                                <Page2 item={item} rander={rander} setRander={setRander}></Page2>
                            </>
                        )
                    }) : <span>No tasks</span>}



                    {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ backgroundColor: '#777', height: 100, margin: 20, width: '80%', margin: 'auto' }}>
                            <div style={{ paddingBottom: 20 }}><span style={{ fontSize: 30, color: 'green' }}>Task 2</span><br></br>
                                <spn>This is my task one</spn></div>
                            <div style={{ padding: 30, borderBottom: "2px solid black" }}><button style={{ backgroundColor: 'green', color: 'white', border: 'none', height: 40, width: 80, borderRadius: 10 }}>complete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button style={{ backgroundColor: 'red', color: 'white', border: 'none', height: 40, width: 80, borderRadius: 10 }} >Delete</button></div>
                        </div>

                    </div>
                    <div style={{ backgroundColor: '#777', height: 100, width: '80%', margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ borderBottom: "2px solid black", paddingBottom: 20 }}><span style={{ fontSize: 30, color: 'green' }}>Task 3</span><br></br>
                                <spn>This is my task one</spn></div>
                            <div style={{ padding: 30, borderBottom: "2px solid black" }}><button style={{ backgroundColor: 'green', color: 'white', border: 'none', height: 40, width: 80, borderRadius: 10 }}>complete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button style={{ backgroundColor: 'red', color: 'white', border: 'none', height: 40, width: 80, borderRadius: 10 }}>Delete</button></div>
                        </div>

                    </div>
                    <div style={{ backgroundColor: '#777', height: 100, width: '80%', margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ borderBottom: "2px solid black", paddingBottom: 20 }}><span style={{ fontSize: 30, color: 'green' }}>Task 4</span><br></br>
                                <spn>This is my task one</spn></div>
                            <div style={{ padding: 30, borderBottom: "2px solid black" }}><button style={{ backgroundColor: 'green', color: 'white', border: 'none', height: 40, width: 80, borderRadius: 10 }}>complete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button style={{ backgroundColor: 'red', color: 'white', height: 40, width: 80, border: 'none', borderRadius: 10 }}>Delete</button></div>
                        </div>

                    </div> */}
                </div>

            </div>

        </>
    )
}

export default Page
