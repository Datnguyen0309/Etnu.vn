import { Frame } from "@/components/Frame";
import { Loading } from "@/components/Loading";
import {  LayoutLkg } from "@/layouts/layoutNganh";

export const LichKg = ({
  list,
  isLoading,
}: {
  list: string[];
  isLoading: boolean;
}) => {
  return (
    <LayoutLkg title="Lịch khai giảng Đại học Thái Nguyên - E learning" titleNganh="Lịch Khai Giảng">
      {!isLoading && (
        <Frame
          title1="Cập nhật lịch khai giảng dự kiến"
          list1={list}
          label="Đăng ký tư vấn"
        />
      )}

      {isLoading && <Loading he="10vh" />}
    </LayoutLkg>
  );
};
