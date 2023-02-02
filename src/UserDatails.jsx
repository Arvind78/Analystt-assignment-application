import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import './userdeteails.css'
const UserDatails = ({ data }) => {
    const [currentItems, setCurrentItems] = useState([])
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [toggle, setToogle] = useState(false)
    const [toggleText, setToggleText] = useState('View Details')

    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    const toogleHandlar = (index) => {
 
        if (toggle) {
            setToogle(false)
            setToggleText('View deteils')
            setItemsPerPage(3)
        }
        else {
            setToogle(true)

            setToggleText('Hide deteils'),

                setItemsPerPage(1)
        }

    }

    return (
        <div className='main-contenars'>
            <div >
                {
                    currentItems.map((val, index) => {
                        return (
                            <div className='user-contenar'>
                                <div className="info" key={index} >
                                    <div className="name">
                                        <h3>User Name</h3>
                                        <span>{val.username}</span>
                                    </div>
                                    <div className="name">
                                        <h3>Name</h3>
                                        <span>{val.name}</span>
                                    </div>
                                    <div className="name">
                                        <h3>City</h3>
                                        <span>{val.address.city}</span>
                                    </div>
                                    <div className="name">
                                        <h3>Zipcode</h3>
                                        <span>{val.address.zipcode}</span>
                                    </div>
                                    <div className="name">
                                        <button className='toogle' onClick={() => toogleHandlar(index)}>{toggleText}</button>
                                    </div>

                                </div>
                                {(toggle) &&
                                    <div className="userdata">
                                        <div>
                                            <h3>Description</h3>
                                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut beatae accusantium deserunt ratione similique numquam quidem cupiditate distinctio ducimus exercitationem, necessitatibus qui unde dolore neque ea vel quos odit commodi.  </div>
                                        </div>
                                        <div className="main">
                                            <div className='persondata'>
                                                <div className="details">
                                                    <h4>Contect Person</h4>
                                                    <span>{val.name}</span>
                                                </div>
                                                <div className="details">

                                                    <h4>Email</h4>
                                                    <span>{val.email}</span>
                                                </div>
                                                <div className="details">
                                                    <h4>Website</h4>
                                                    <span>{val.website}</span>
                                                </div>
                                                <div className="details">
                                                    <h4>Phone</h4>
                                                    <span>{val.phone.slice(1, 14)}</span>
                                                </div>
                                            </div>

                                            <div >
                                                .
                                                <div className="details">
                                                    <h4>Company</h4>
                                                    <span>{val.company.name}</span>
                                                </div>

                                                <div className="details">
                                                    <h4>Company</h4>
                                                    <span>{val.company.bs}</span>
                                                </div>

                                                <div className="details">
                                                    <h4>Street-Address</h4>
                                                    <span>{`${val.address.street} ${val.address.suite}`}</span>
                                                </div>

                                                <div className="details">
                                                    <h4>City</h4>
                                                    <span>{val.address.city} </span>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                }
                            </div>
                        )
                    })
                }
            </div>

            <ReactPaginate

                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </div>
    );

}

export default UserDatails