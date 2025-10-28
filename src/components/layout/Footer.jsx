import React from 'react';
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyInfo } from '../../data/companyInfo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">태</span>
              </div>
              <h3 className="text-white text-xl font-bold">
                {companyInfo.name}
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">{companyInfo.nameEn}</p>
            <p className="text-sm text-gray-400">대표이사: {companyInfo.ceo}</p>
            <p className="text-sm text-gray-400">
              사업자등록번호: {companyInfo.businessNumber}
            </p>
            <p className="text-sm text-gray-400 mt-2">{companyInfo.license}</p>
          </div>

          {/* 본사 */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">본사</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-primary-600" />
                <span className="text-sm text-gray-400">{companyInfo.mainOffice.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary-600" />
                <span className="text-sm text-gray-400">{companyInfo.mainOffice.tel}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaFax className="text-primary-600" />
                <span className="text-sm text-gray-400">{companyInfo.mainOffice.fax}</span>
              </div>
            </div>
          </div>

          {/* 지사 */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">지사</h4>
            <div className="flex items-start gap-3 mb-4">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-primary-600" />
              <span className="text-sm text-gray-400">{companyInfo.branchOffice.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary-600" />
              <span className="text-sm text-gray-400">{companyInfo.email}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Taeyoung Development Construction Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
