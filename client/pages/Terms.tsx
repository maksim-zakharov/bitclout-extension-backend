import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { i18nContext } from '../contexts/i18n.context';

const Terms = () => {
  const { lang } = useContext(i18nContext);

  const history = useHistory();

  const arTerms = () => {
    return (
      <div className="form-signin terms">
        <h1
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            textAlign: 'right',
          }}
          className="cov19Title"
        >
          Covid19 تسجيل في نظام الحجر المؤسسي للفنادق
        </h1>
        <h2 style={{ fontWeight: 'bold', textAlign: 'end' }}>
          الشروط والضوابط
        </h2>
        <br />
        <br />
        <div style={{ textAlign: 'right' }}>
          <ol dir="rtl">
            <li>
              توفير خدمة الاقامة للعزل الصحي المؤسسي لمدة 8 أيام حسب الاشتراطات
              الصحية الصادرة من وزارة الصحة غرفة منفردة مع دورة مياه
            </li>
            <br />
            <li>
              توفير خدمات التغذية للوجبات الأساسية اليومية للمحجورين في موقع
              الإقامة وخدمة غسيل الملابس ، مع مراعاة توفير الطعام والشراب في
              ادوات لاستعمال مرة واحدة لكل الواجبات
            </li>
            <br />
            <li>
              توفير وسيلة نقل / أو التعاقد مع شركة لنقل المسافرين/ المسافر
              القادم من مطار مسقط الدولي ومطار و صلالة الدولي الى موقع الفندق
              (إختياري)
              <br />
              <br />
              <li>توفير مواقف سيارات للقادمين من المافذ البرية</li>
              <br />
              <li>
                تخصيص مكان محدد في الفندق لإجراء فحص البلمرة الثاني ونزع السوار
              </li>
              <br />
              <li>تحديد العدد الفعلي للغرف االمخصصة للحجر المؤسسي</li>
              <br />
              <li>
                تصنيف الغرف المتوفرة (ستوديو، غرفة، شقة، إلخ.) وتحديد عدد الغرف
                والأسعار لكل تصنيف
              </li>
              <br />
              <li>
                نظافة الغرف المخصصة لمكان العزل الصحي المؤسسي والبيئة المحيطة و
                التعقيم الدوري لجميع المرافق
              </li>
              <br />
              <li>
                إيجاد آلية للتعامل مع الحالات الطارئة
                <br />
                مثال: وسيلة نقل للطواري
              </li>
              <br />
              <li>الالتزام بتوفير الادوات الصحية الاحترازية</li>
              <br />
              <li>
                تركيب أجهزة راصد من شركة إي مشرف في المداخل الأساسية للفندق{' '}
                <br />
                <br />
                هيثم: 79138720
                <br />
                أحمد: 94799068
              </li>
              <br />
              <li>
                تركيب كاميرات حرارية أو أدوات قياس حرارة على المداخل الرئيسية
                للفندق
              </li>
              <br />
              <li>توفير الحراسة الأمنية (أمن الفندق، طاقم للأمن والسلامة)</li>
              <br />
              <li>
                تعبئة إستمارة التسجيل وتوفيز المعلومات المطلوبة باللغتين العربية
                والإنجليزية
              </li>
              <br />
              <li>
                تخصيص ٣٪ من الغرف للحالات الإيجابية المصابة في حال احتاجت هذه
                الحالات لتمديد فترة العزل
                <br />
                <br />
                <li>
                  ستكون هناك رسوم بمقدار 10٪ من كل حجز مقابل الخدمات التالية:
                </li>
                <br />
                <ol>
                  <li>
                    سيتم تخصيص عضوية للفندق في نظام الحجر الصحي المؤسسي القائم
                    في السلطنة (كما سيتم استقطاع جزء من رسوم الخدمة للصندوق
                    الوقفي لدعم الخدمات الصحية لمكافحة كورونا (كوفيد-19))
                    <br />
                    <br />
                    ملاحظة: حقوق استضافة المعزولين مؤسسيًا حصرية للمسجلين في
                    نظام الحجر الصحي المؤسسي IQS
                  </li>
                  <li>
                    خدمة الحجز المسبق التي سيتم توفيرها للمسافرين الداخلين
                    للسلطنة
                  </li>
                  <li>تحصيل المدفوعات أون لاين</li>
                  <li>تركيب جهاز راصد للكشف عن المعزولين المخالفين</li>
                  <li>
                    يتم تسجيل نظام الحجر الصحي المؤسسي لكل فندق من خلال
                    hotel.emushrif.om
                  </li>
                  <li>
                    رسوم المعاملات البنكية للدفعات الالكترونية <br />
                    <br />
                    ملاحظة: الأيام التي تزيد عن الثمانية أيام للعزل لن تكون
                    خاضعة لرسوم الخدمة الـمبيـنة أعلاه <br />
                    <br />
                  </li>
                </ol>
              </li>
              <li>
                سيتم تصفية الحسابات مع الفندق وتحويل المستحقات بشكل اسبوعي
                <br />
                <br />
              </li>
              <li>
                سيتم تسديد المستحقات المالية للنزل بعد التأكد من تسجيل الدخول و
                تسجيل الخروج عن طريق النظام
                <br />
                <br />
              </li>
              <li style={{ fontWeight: 'bold' }}>
                يتم احتساب 50% من قيمة الحجز فقط للأطفال الذين تقل أعمارهم عن 12
                سنة وتزيد عن ستة سنوات ولا يتم احتساب أي مبلغ على الأطفال الذين
                تقل أعمارهم عن 7 سنوات
              </li>
            </li>
          </ol>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link className="mdc-button mdc-button--raised accept" to="/register">
            <span className="mdc-button__label">أنا موافق</span>
          </Link>
        </div>
      </div>
    );
  };

  const enTerms = () => {
    return (
      <div className="form-signin terms">
        <h1
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            textAlign: 'left',
          }}
          className="cov19Title"
        >
          COVID-19 Institutional Quarantine Registration for Hotels
        </h1>
        <h2 style={{ fontWeight: 'bold', textAlign: 'left' }}>
          Terms and Conditions
        </h2>
        <br />
        <br />
        <div>
          <ol>
            <li>
              Provide self-isolation lodgings for at least 8 days in line with
              MoH's health requirements.
            </li>
            <br />
            <li>
              Provide essential meal services and laundry services daily to the
              hotel residents. Hotels need to provide meals with single-use
              containers and utensils.
            </li>
            <br />
            <li>
              Provide a transportation service from the airport, or contract a
              transportation company to transport travellers from the airport to
              the hotel. (Optional)
              <br />
              <br />
            </li>
            <li>
              Provide parking space for travellers arriving through land
              borders.
            </li>
            <br />
            <li>
              Designate an area within the hotel for in-hotel PCR tests and
              bracelet removal activities.
            </li>
            <br />
            <li>
              Share the number of rooms dedicated to institutional
              self-isolation (Do not offer these through any other platform)
            </li>
            <br />
            <li>
              Categorize available rooms (for example, studio, single or double)
              and determine the daily rate and number of rooms available under
              each category.
            </li>
            <br />
            <li>
              Ensure the rooms' sanitation and cleanliness for self-isolation
              and the common hotel areas and the periodic sanitation of these
              facilities.
            </li>
            <br />
            <li>
              Have an exact standard operating procedure for dealing with
              emergencies concerning self-isolating guests (e.g. emergency
              transport to the hospital).
            </li>
            <br />
            <li>
              Commit to providing preventative PPE following the standards of
              MoH.
            </li>
            <br />
            <li>
              Install Rased devices provided by eMushrif at he main hotel
              entrances.
              <br />
              <br />
              Contact the following eMushrif staff to procure rased devices:
              <br />
              <br />
              Haitham: 7913 8720
              <br />
              Ahmed : 9479 9068
            </li>
            <br />
            <li>
              Install thermal cameras or any other temperature measuring
              apparent at the main entrances of the hotel.
            </li>
            <br />
            <li>Provide security (hotel security or hotel HSE officers).</li>
            <br />
            <li>
              Fill out the registration form, and provide the required
              information in both English AND Arabic.
            </li>
            <br />
            <li>
              Dedicate 3% of the hotel's capacity to potential positive cases as
              these cases might require extra days of quarantine.
              <br />
              <br />
            </li>
            <li>
              There is a service fee of 10% from each reservation for the
              following services:
              <br />
              <br />
              <ol>
                <li>
                  Membership in the Institutional Quarantine System IQS (a
                  portion of the service fee, will be allocated to the Oman
                  COVID-19 fund),
                </li>
                <li>
                  Note: the rights to host institutionally quarantined guests is
                  exclusive to members of the Institutional Quarantine System
                  IQS.
                </li>
                <li>
                  The pre-booking service that eMushrif will provide to in-bound
                  travellers,
                </li>
                <li>Online payment collection in advance,</li>
                <li>
                  Rased device installation and inclusion in the Rased program
                  for the detection of self-isolated individuals,
                </li>
                <li>
                  Institutional quarantined system for each hotel through{' '}
                  <a href="https://hotel.emushrif.om">hotel.emushrif.om</a>,
                </li>
                <li>
                  Bank charges (on collections)
                  <br />
                  <br />
                  Note: any additional days to the initial 8 days of isolation
                  will not be subject to this service fee.
                </li>
              </ol>
              <br />
            </li>
            <li>
              eMushrif will process payment settlements weekly.
              <br />
              <br />
            </li>
            <li>
              Payment per isolated guests is contingent on checking in and
              checking out into the IQS appropriately. <br />
              <br />
            </li>
            <li style={{ fontWeight: 'bold' }}>
              Children of ages 7-11 are charged only 50% of the booking price.
              Children of ages 0-6 are booked free of charge.
            </li>
          </ol>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            style={{width: '100%', marginBottom: '0'}}
            className="mdc-button mdc-button--raised start"
            onClick={() => history.push('/register')}
          >
            <span className="mdc-button__label start_lan">I Agree</span>
          </button>
        </div>
      </div>
    );
  };

  return lang === 'en' ? enTerms() : arTerms();
};

export default Terms;
