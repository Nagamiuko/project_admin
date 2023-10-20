import React, { useEffect } from 'react'
import "./pop.scss"
import { useDispatch, useSelector } from 'react-redux';
import { getDetailWithdram } from '../../redux/action/withdram';
import moment from 'moment-timezone';

const PopDetail = ({setPop , id}) => {
   const {detailwith ,isLoading } = useSelector((state) => state.withdram);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getDetailWithdram(id))
   }, [id]);
  console.log(id);
  return (
    <>
     <div className="box-bg-top">
        <div className="box-container">
           <button onClick={()=> setPop(false)} className="box-close">
              <span>X</span>
           </button>
           <div className="container-detail">
              <div className="title-w">
                 รายละเอียดแจ้งถอด
              </div>
             <div className="row-col">
               <div className="col">
                <div className="detail-user">
                    <div className="row-col">
                       <div className="item-title">
                          ชื่อผู้รับเงิน : {detailwith?.bankHolderName}
                       </div>
                    </div>
                </div>
                <div className="detail-user">
                    <div className="row-col">
                       <div className="item-title">
                          อีเมลร้านค้า : {detailwith?.mailShop}
                       </div>
                    </div>
                </div>
                <div className="detail-user">
                    <div className="row-col">
                       <div className="item-title">
                          รหัสร้านค้า : {detailwith?.shopId}
                       </div>
                    </div>
                </div>
                <div className="detail-user">
                    <div className="row-col">
                       <div className="item-title">
                          ประเภทธนาคาร : {detailwith?.bankName}
                       </div>
                    </div>
                </div>
                <div className="detail-user">
                    <div className="row-col">
                       <div className="item-title">
                          ธนาคารสาขา : {detailwith?.bankAddress}
                       </div>
                    </div>
                </div>
                <div className="detail-user">
                    <div className="row-col">
                       <div className="item-title">
                          เลขบัญชีธนาคาร : {detailwith?.bankAccountId}
                       </div>
                    </div>
                </div>
                <div className="detail-user">
                    <div className="row-col">
                       <div className="item-title">
                          จำนวน : {detailwith?.moneyTotal}
                       </div>
                    </div>
                </div>
                <div className="detail-user">
                    <div className="row-col">
                       <div className="item-title">
                          เวลาทำรายการ : {moment(detailwith?.paidAt).format("YYYY / MMM / DD - h:mm:ss a")}
                       </div>
                    </div>
                </div>
               </div>
             </div>
           </div>
        </div>
     </div>
    </>
  )
}

export default PopDetail
