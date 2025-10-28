import React from 'react';
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyInfo } from '../../data/companyInfo';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-sm mb-2">{companyInfo.nameEn}</p>
            <p className="text-sm">대표이사: {companyInfo.ceo}</p>
            <p className="text-sm">
              사업자등록번호: {companyInfo.businessNumber}
            </p>
            <p className="text-sm">{companyInfo.license}</p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">본사</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span className="text-sm">{companyInfo.mainOffice.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span className="text-sm">{companyInfo.mainOffice.tel}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFax />
                <span className="text-sm">{companyInfo.mainOffice.fax}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">지사</h4>
            <div className="flex items-start space-x-2">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <span className="text-sm">{companyInfo.branchOffice.address}</span>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <FaEnvelope />
              <span className="text-sm">{companyInfo.email}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Taeyoung Development Construction
            Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
