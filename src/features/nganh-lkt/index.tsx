"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Lkt = () => {
  return (
    <LayoutNganh title=" Ngành Luật kinh tế" path="/nganh-luat-kinh-te" titleNganh="Luật kinh tế">

      <Branch
        name="Luật kinh tế"
        src="/4.png"
        overview={[
          "Chương trình đào tạo trực tuyến ngành Luật Kinh tế cung cấp cho học viên kiến thức chuyên môn và năng lực nghề nghiệp về ngành luật, đồng thời chuyên sâu hơn trong lĩnh vực luật kinh doanh thương mại để giải quyết các vấn đề pháp lý trong công việc và cuộc sống. Học viên cũng được trang bị kiến thức bổ trợ về kinh tế, quản trị, kế toán để phục vụ cho nghề nghiệp. Bên cạnh đó, học viên được rèn luyện các kỹ năng áp dụng pháp luật, thực hành nghề nghiệp, tư duy phản biện và được bồi dưỡng hình thành thái độ văn hóa ứng xử pháp lý và tuân thủ pháp luật.",
        ]}
        jobs={[
          "Luật sư",
          "Nhân viên văn phòng công chứng",
          "Chấp hành viên",
          "Thẩm tra viên",
          "Chuyên viên tư vấn pháp luật tại các doanh nghiệp",
          "Chuyên viên nghiên cứu hành pháp, lập pháp và tư pháp tại các cơ quan nhà nước",
          "Giảng viên Luật kinh tế",
        ]}
        program={{
          credits: 124,
          subjects: 42,
          list: [
            {
              title: "Đã có bằng cao đẳng khác khối ngành",
              content: "2,5 năm",
            },
            {
              title: "Đã có bằng cao đẳng cùng khối ngành",
              content: "2 năm",
            },
            {
              title: "Đã có bằng Đại học cùng, khác khối ngành",
              content: "2 năm",
            },
          ],
        }}
      />
    </LayoutNganh>
  );
};
