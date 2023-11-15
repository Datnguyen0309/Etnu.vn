"use client";

import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Nna = () => {
  return (
    <LayoutNganh title=" Ngành Ngôn ngữ Anh " path="/nganh-ngon-ngu-anh" titleNganh="Ngôn ngữ Anh">

      <Branch
        name=" Ngôn ngữ Anh"
        src="/6.png"
        overview={[
          "Tiếng Anh là ngôn ngữ chính thức của Vương quốc Anh, Hoa Kỳ, Canada, Úc, và nhiều quốc gia và vùng lãnh thổ khác trên khắp thế giới. Nó là một trong những ngôn ngữ phổ biến nhất và được sử dụng rộng rãi nhất trên thế giới. Tiếng Anh thuộc hệ thống ngôn ngữ Germanic và được viết bằng bảng chữ cái Latin",
          "Tiếng Anh được sử dụng rộng rãi trong nhiều lĩnh vực, bao gồm kinh doanh, khoa học, công nghệ, giáo dục, truyền thông, và văn hóa đại chúng. Nó là ngôn ngữ chính thức của nhiều tổ chức quốc tế như Liên Hợp Quốc và NATO."
        ]}
        jobs={[
          "Giảng viên tiếng anh",
          "Dịch thuật và phiên dịch",
          "Kinh doanh quốc tế",
          "Nghiên cứu và phát triển",
          "Hướng dẫn viên, chuyên viên tư vấn tại các công ty du lịch, lữ hành, nhà hàng khách sạn",
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
