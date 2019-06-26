
import shuffle from "./shuffle"
import styles from './index.css';

export default function () {
  let arrData = [];
  const lines = `Tôi đã có một kỳ nghĩ cuối tuần tuyệt vời.
    Tôi đã không có gì để làm vào chiều chủ nhật.
    Tôi đã đi đến…
    Tôi đã đi vào trong cửa hàng nhìn xung quanh
    Họ đang có một …
    Tất cả những gì tôi phải làm là …
    Bỏ nó vào trong hộp
    Bao nhiêu tiền từ đây đến sân bay?
    Đó là lần đầu tiên tối đến đó
    Nó cần thêm vài đồ nội thất mới để làm cho nó đẹp hơn
    Menu có rất nhiều sự chọn lựa
    Không may là phục vụ rất chậm
    Họ cần thuê thêm nhân viên
    Chúng tôi không để lại nhiều tiền tip khi rời đi
    Tôi không thích sữa lắc ngọt
    Anh thích ăn với măng tây hay khoai tây nướng?
    Bạn có muốn nó ngay bây giờ không
    Nó ở phía trước mặt bạn
    Đi thẳng khoảng 100 mét
    Rẽ trái ở ngã tư đầu tiên
    Rút thăm 3 cái tên
    Đoán thử xem?
    Anh đã sẵn sàng gọi món chưa?
    Cho tôi 1 bít tết tái
    Làm ơn nói đầu bếp nhanh lên, tôi chết đói rồi
    Chị thích mùi vị gì?
    Tôi không thể tin được
    Tôi đã nhận được một cuộc gọi từ …
    Lâu lắm rồi tôi không gặp cô ấy
    Cô ấy cười vào ý tưởng của anh ta
    Buổi biểu diễn đã bắt đầu lúc 8 giờ
    1 bàn cho 5 người
    Anh lấy nó cho ai?
    Tôi không phải Lan nhưng tôi biết cô ấy là ai?
    Tôi không chắc cô ấy ở đâu trong tòa nhà.
    Cô ấy là người phụ nữ cao với mái tóc nâu đậm và mắt nâu nhạt
    2 đứa là 1 cặp hoàn hảo đó
    Vậy là tôi rẽ trái ở ngã tư này, không phải cái tiếp theo.
    Cô ấy là một trong những người bạn thân nhất của tôi
    Anh ấy đã chuyển tới Hà Nội để làm việc
    Tôi đã ở thành phố 5 ngày
    Cô ấy đã mời tôi đến nhà hàng ăn tối
    Chúng tôi đã có thời gian thoải mái bên nhau
    Nghe thật là thú vị
    Cô ấy có khuôn mặt tròn và tóc đen dài
    Cô ấy xinh đẹp trong bộ váy màu vàng
    Tôi làm việc cho một công ty du lịch
    Tôi thường không thích đi đến các bữa tiệc sinh nhật
    Những người tại bữa tiệc rất là thú vị
    Nhạc cũng hay
    Tôi đã không về nhà cho đến sau 2h sáng
    Tôi ghét sử dụng taxi ở đây
    Tài xế lái xe quá nhanh và thật sự rất nguy hiểm
    Anh ấy thường hay thô lỗ
    Vị trí thật là tuyệt
    Bạn có thể ngồi ở trong và nhìn mọi người đi qua lại
    Bạn cần thẻ tín dụng để ăn ở đó
    Tốn hơn 100$ cho 2 người chúng tôi
    Nhiều hơn tôi tưởng
    Hầu hết những căn phòng đó đều trong tình trạng xấu
    Điều tôi ghét nhất là…
    Lúc đi đến đó, tôi cảm thấy rất nóng và không thoải mái
    Tôi chưa bao giờ gặp bất cứ vấn đề gì lớn khi sống ở đây
    Căn phòng thường sạch sẽ và nhìn khá mới
    Giá cả khá tốt
    Thịt xông khói và trứng
    Họ cứ đi qua đi lại
    Tôi sẽ trở lại trong 1 phút
    Nếu anh cho em cái xe hơi, em sẽ cho anh 1 điều ngạc nhiên
    Tôi nghĩ cô ấy xứng đáng được típ nhiều
    Tôi phải lái xe nửa giờ mới đến đó
    Nhạc nhẹ và hoa ở khắp nơi
    Người phục vụ chăm sóc chúng tôi tốt
    Anh ấy nhảy khỏi xe oto
    Đi qua cái trạm xe buýt luôn
    Anh ta nặng 220 kí
    Anh ta sẽ làm bạn cười
    Tôi đang trong chế độ kiêng mặn
    Đừng hâm nóng nó, tôi không thích bánh nóng
    Cô ấy nghe có vẻ hấp dẫn đấy
    Chúng tôi sẽ đón anh vào 6h30 sáng mai
    Điều tôi thích nhất là…
    Bạn trai tôi lái xe rất cẩn thận
    Tôi nghĩ điều đó rất quan trọng
    Tôi thấy GRAB BKIE ở đây khá tốt
    Hầu hết những phòng học họ sử dụng còn mới và họ giữ chúng rất sạch sẽ
    Nó hơi đắt
    Tôi đã trả 500.000 VND để đến sân bay
    Anh ấy nói tiếng anh không giỏi lắm
    Nó thật khó để giải thích đối với tôi
    Nó khá rẻ
    Đó là điều tôi thích nhất về chúng
    Có 1 nhà hàng Thái mới cách nhà tôi 5 phút
    Họ cần thêm nhiều món vào menu
    Lúc này họ chỉ phục vụ 4 hay 5 món
    Mọi người làm ở đó thì rất thân thiện và hữu ích
    Hầu hết chúng đều khá cũ
    Một nữa trong số chúng
    Có cấp cứu không?
    Bao nhiêu hành khách vậy?
    Tôi rất vội, tôi phải bắt xe lửa
    Làm ơn càng sớm càng tốt
    Tôi đang tìm địa chỉ này
    Bạn đi sai đường rồi
    Bạn có thể nói lại được không?
    Mấy giờ xe lửa chạy?`;
  let split = lines.split("\n");
  let multipleSpaceDeg = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
  for (var i = 0; i < split.length; i++) {
    let itemWithMultipleSpace = split[i] + multipleSpaceDeg
    arrData.push(itemWithMultipleSpace);
  }
  let newArr = shuffle(arrData);
  return (
    <div>
      {newArr.map((item, i) =>
        <h4 key={i}>{item}</h4>
      )}
    </div>
  );
}