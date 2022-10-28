import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import { movieActions } from '../../store/actions/movieActions'
import moment from 'moment'
import { getMovieDetail, useQuanLyPhim } from '../../storeToolkit/quanLyPhim'
const MovieDetail = () => {
    const dispatch = useDispatch()
    const params = useParams()
    console.log('params: ', params)
    const {movieDetail} = useQuanLyPhim()
    // console.log(movieDetail)

    useEffect(() => {
        dispatch(getMovieDetail(params.movieIds))
    },[])
    return <div>
        <div className="row">
            <div className="col-4">
                <img src={movieDetail?.hinhAnh} className="img-fluid" alt={movieDetail?.biDanh} />
            </div>
            <div className="col-8">
                <p>{movieDetail?.tenPhim}</p>
                <p>{movieDetail?.moTa}</p>
                <p>Đánh giá: {movieDetail?.danhGia}</p>
                <p>{moment(movieDetail?.ngayKhoiChieu).format('DD.MM.YYYY hh:mm')}</p>
                <button className="btn btn-success" >Trailer</button>
            </div>
        </div>
        </div>
}

export default MovieDetail  