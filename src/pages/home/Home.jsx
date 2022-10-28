import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { movieActions } from '../../store/actions/movieActions'
import {useSearchParams, useNavigate} from 'react-router-dom'
import cn from 'classnames'
import styled from 'styled-components'
import { getMovieList, useQuanLyPhim } from '../../storeToolkit/quanLyPhim'

const Home = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useSearchParams({
    isShowing: true,
  })
  const {movieList} = useQuanLyPhim()

  const navigate = useNavigate()
  useEffect(() =>{
    dispatch(getMovieList())
  },[])
  return <div className="Home container">
      <div className="inset-x-0 top-0 h-10 ">
        <Button className={cn('mt-3', {active: search.get('isShowing') === 'true'})} onClick={()=>{
          setSearch({
            isShowing: true,
          })
        }}>Đang chiếu</Button>
        <Button className={cn('ms-3',{active: search.get('isShowing') === 'false' })} onClick={()=>{
          setSearch({
            isShowing: false,
          })
        }}>Sắp chiếu</Button>
      </div>
    <div className="row">
    {movieList
      .filter((item) => item.sapChieu.toString() === search.get('isShowing'))
      .map((film) =>(
        <div className="col-3 mt-3" key={film.maPhim}>
          <div className="card">
              <img src={film.hinhAnh} alt={film.biDanh} />
              <div className="card-body">
                  <p>{film.tenPhim}</p>
                  <button className="btn btn-primary" onClick={()=> navigate(`/detail/${film.maPhim}`)}>Chi tiết</button>
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
}

export default Home

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 6px;
  &:hover{
    box-shadow: 2px 2px rgb(56, 52, 52);
  }
  &.active{
    background-color: #744848;
    color: #fff;
  }
`