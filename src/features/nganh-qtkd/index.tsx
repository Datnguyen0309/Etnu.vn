"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Qtkd = () => {
  return (
    <LayoutNganh title=" Ngành quản trị kinh doanh" path="/nganh-quan-tri-kinh-doanh" titleNganh="Quản trị kinh doanh">

      <Branch
        name="Quản trị kinh doanh"
        src="/3.png"
        overview={[
          "Ngành Quản trị kinh doanh chuẩn bị cho người học những năng lực cần thiết cho việc quản lý các loại hình tổ chức khác nhau, từ các doanh nghiệp cho đến các đơn vị thuộc khu vực công nhằm đạt được mục tiêu với hiệu quả cao nhất. Trong các tổ chức nói trên, người học quản trị kinh doanh có thể đáp ứng yêu cầu của những vị trí quản lý khác nhau: nhân sự, marketing, sản xuất hay điều hành chung tùy theo kinh nghiệm, sở thích và nhu cầu của đơn vị",
        ]}
        jobs={[
          "Quản trị kinh doanh quốc tế",
          "Quản trị Marketing",
          "Quản trị kinh doanh tổng hợp",
          "Quản trị doanh nghiệp",
          "Quản trị Khởi nghiệp",
          "Quản trị Logistic",
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
