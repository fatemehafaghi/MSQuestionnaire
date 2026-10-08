let currentQuestion = 0;

// آرایه کامل سوالات (دموگرافیک + بخش درک نشانه‌های بیماری)
const questions = [

  /* =========================================
     بخش اول: اطلاعات دموگرافیک (صفحات ۱ تا ۱۴)
  ========================================= */

  // صفحه ۱: جنسیت
  
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>جنسیت</label>
      <div class="radio-group">
        <label><input type="radio" name="gender" value="مرد"> مرد</label>
        <label><input type="radio" name="gender" value="زن"> زن</label>
      </div>
    </div>
  </div>
  `,

  // صفحه ۲: سن / تاریخ تولد
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
<div class="form-group">
  <label>تاریخ تولد (روز / ماه / سال)</label>
  <div class="age">
    <!-- محدودسازی روز بین ۱ تا ۳۱ -->
    <input type="number" name="day" placeholder="روز" min="1" max="31" 
           oninput="if(this.value > 31) this.value = 31; if(this.value < 1 && this.value !== '') this.value = 1;">
    
    <select name="month">
      <option value="" disabled selected hidden>ماه</option>
      <option value="1">فروردین</option>
      <option value="2">اردیبهشت</option>
      <option value="3">خرداد</option>
      <option value="4">تیر</option>
      <option value="5">مرداد</option>
      <option value="6">شهریور</option>
      <option value="7">مهر</option>
      <option value="8">آبان</option>
      <option value="9">آذر</option>
      <option value="10">دی</option>
      <option value="11">بهمن</option>
      <option value="12">اسفند</option>
    </select>
    
    <!-- محدودسازی از سال ۱۳۵۰ تا ۱۴۰۵ -->
    <input type="number" name="year" placeholder="سال" min="1350" max="1405">
  </div>
</div>
  `,

   <!-- قد -->
  <div class="form-group">
    <label>قد (سانتی‌متر)</label>
    <input 
      type="number" 
      name="height" 
      id="height"
      placeholder="مثلاً 165"
      min="100"
      max="250"
      step="0.1"
      oninput="calculateBMI()"
    >
  </div>

  <!-- وزن -->
  <div class="form-group">
    <label>وزن (کیلوگرم)</label>
    <input 
      type="number" 
      name="weight" 
      id="weight"
      placeholder="مثلاً 60"
      min="20"
      max="300"
      step="0.1"
      oninput="calculateBMI()"
    >
  </div>

  <!-- BMI -->
  <div class="form-group">
    <label>شاخص توده بدنی (BMI)</label>
    <input 
      type="text" 
      name="bmi" 
      id="bmi"
      readonly
      placeholder="پس از وارد کردن قد و وزن محاسبه می‌شود"
    >
  </div>

</div>
`,
  



function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const bmiInput = document.getElementById("bmi");

  if (height > 0 && weight > 0) {
    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);

    bmiInput.value = bmi.toFixed(1);
  } else {
    bmiInput.value = "";
  }
}



  // صفحه ۳: شغل
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>شغل شما چیست؟</label>
      <select name="job">
        <option value="">انتخاب کنید</option>
        <option value="کارمند">کارمند</option>
        <option value="بازنشسته">بازنشسته</option>
        <option value="آزاد">آزاد</option>
        <option value="خانه دار">خانه دار</option>
        <option value="کارگر">کارگر</option>
        <option value="بیکار">بیکار</option>
        <option value="سایر">سایر</option>
      </select>
    </div>
  </div>
  `,

  // صفحه ۴: عنوان شغل
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>عنوان دقیق شغل خود را بنویسید:</label>
      <input type="text" placeholder="مثلاً: معلم، پرستار، مهندس و ...">
    </div>
  </div>
  `,

  // صفحه ۵: تحصیلات
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>میزان تحصیلات شما چیست؟</label>
      <select name="education">
        <option value="">انتخاب کنید</option>
        <option value="دکترا">دکترا</option>
        <option value="فوق لیسانس">فوق لیسانس</option>
        <option value="لیسانس">لیسانس</option>
        <option value="فوق دیپلم">فوق دیپلم</option>
        <option value="دیپلم">دیپلم</option>
        <option value="دیپلم ناقص">دیپلم ناقص</option>
        <option value="بدون سواد">بدون سواد</option>
      </select>
    </div>
  </div>
  `,

  // صفحه ۶: رشته دانشگاهی
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>لطفاً رشته دانشگاهی خود را بنویسید:</label>
      <input type="text" placeholder="نام رشته تحصیلی...">
    </div>
  </div>
  `,

  // صفحه ۷: وضعیت تاهل
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>وضعیت تاهل</label>
      <select name="marital_status">
        <option value="">انتخاب کنید</option>
        <option value="مجرد">مجرد</option>
        <option value="متاهل">متاهل</option>
        <option value="جدا شده از همسر / مطلقه">جدا شده از همسر / مطلقه</option>
        <option value="همسر فوت شده">همسر فوت شده</option>
      </select>
    </div>
  </div>
  `,

  // صفحه ۸: محل سکونت
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>محل سکونت</label>
      <div class="radio-group">
        <label><input type="radio" name="city" value="شهر"> شهر</label>
        <label><input type="radio" name="city" value="روستا"> روستا</label>
      </div>
    </div>
  </div>
  `,

  // صفحه ۹: مدت ابتلا به بیماری
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>مدت ابتلا به بیماری MS (سال)</label>
      <input type="number" min="0">
    </div>
  </div>
  `,

  // صفحه ۱۰: سن شروع بیماری
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>سن شروع بیماری</label>
      <input type="number" min="0">
    </div>
  </div>
  `,

  // صفحه ۱۱: سابقه بستری
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>آیا تاکنون به علت عوارض بیماری بستری شده‌اید؟</label>
      <div class="radio-group">
        <label><input type="radio" name="hospital" value="بله"> بله</label>
        <label><input type="radio" name="hospital" value="خیر"> خیر</label>
      </div>
    </div>
  </div>
  `,

  // صفحه ۱۲: فعالیت جسمانی
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>آیا فعالیت جسمانی دارید؟</label>
      <div class="radio-group">
        <label><input type="radio" name="sport" value="بله"> بله</label>
        <label><input type="radio" name="sport" value="خیر"> خیر</label>
      </div>
    </div>
  </div>
  `,

  // صفحه ۱۳: روش‌های کنترل بیماری
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>از چه روش‌هایی برای کنترل بیماری استفاده می‌کنید؟</label>
      <div class="checkbox-group">
        <label><input type="checkbox" value="دارودرمانی"> دارودرمانی</label>
        <label><input type="checkbox" value="رعایت رژیم غذایی"> رعایت رژیم غذایی</label>
        <label><input type="checkbox" value="فعالیت ورزشی"> فعالیت ورزشی</label>
        <label><input type="checkbox" value="طب سنتی"> طب سنتی</label>
        <label><input type="checkbox" value="هیچکدام"> هیچکدام</label>
        <label><input type="checkbox" value="سایر"> سایر</label>
      </div>
    </div>
    <div class="form-group" style="margin-top: 15px;">
      <label>در صورت انتخاب سایر، توضیح دهید:</label>
      <input type="text" placeholder="توضیحات...">
    </div>
  </div>
  `,

  // صفحه ۱۴: علت اصلی بیماری
  `
  <div class="question-box">
    <h2>اطلاعات دموگرافیک</h2>
    <div class="form-group">
      <label>علت اصلی بیماری خود را چه می‌دانید؟</label>
      <select name="cause">
        <option value="">انتخاب کنید</option>
        <option value="عوامل ژنتیک">عوامل ژنتیک</option>
        <option value="عوامل روحی">عوامل روحی</option>
        <option value="درآمد و فشار اقتصادی">درآمد و فشار اقتصادی</option>
        <option value="رفتار دیگران">رفتار دیگران</option>
        <option value="عدم تحرک">عدم تحرک</option>
        <option value="عادات رفتاری">عادات رفتاری</option>
        <option value="هیچکدام">هیچکدام</option>
      </select>
    </div>
  </div>
  `,

  /* =========================================
     بخش دوم: درک نشانه‌های بیماری (صفحات ۱۵ تا ۲۳)
  ========================================= */

  // سوال ۱
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۱. آشکار شدن علائم بیماری مانند دو بینی، تاری دید در اقدام برای مراقبت از خود اهمیت دارد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q1" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q1" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q1" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q1" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q1" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۲. آشکار شدن علائم بیماری مانند سرگیجه، گز گز، لکنت زبان و غیره در اقدام برای مراقبت از خود اهمیت دارد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q2" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q2" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q2" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q2" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q2" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۳. بروز خطا در انجام کارها، کند شدن حرکات، کاهش سرعت در انجام کارها در اقدام برای مراقبت از خود اهمیت دارد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q3" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q3" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q3" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q3" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q3" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۴. بی‌توجهی نسبت به علائم اولیه باعث پیشرفت بیماری می‌شود.</label>
      <div class="radio-group">
        <label><input type="radio" name="q4" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q4" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q4" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q4" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q4" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۵
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۵. بی‌اهمیت دانستن علائم بیماری، انجام اقدامات مراقبتی را به تأخیر می‌اندازد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q5" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q5" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q5" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q5" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q5" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۶
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۶. پذیرش وجود یک بیماری در اتخاذ اقدامات تشخیصی، برای انجام مراقبت‌ها اهمیت دارد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q6" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q6" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q6" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q6" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q6" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۷
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۷. برای کسب اطلاعات از بیماری، پزشکان می‌توانند اطلاعات مناسبی ارائه دهند.</label>
      <div class="radio-group">
        <label><input type="radio" name="q7" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q7" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q7" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q7" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q7" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۸
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۸. وضعیت اقتصادی در اتخاذ اقدامات تشخیصی موثر است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q8" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q8" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q8" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q8" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q8" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۹
  `
  <div class="question-box">
    <h2>درک نشانه‌های بیماری</h2>
    <div class="form-group">
      <label>۹. حمایت و درک اطرافیان، در اتخاذ اقدامات تشخیصی موثر است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q9" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q9" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q9" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q9" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q9" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,
  /* =========================================
     بخش سوم: گرایش به مراقبت آگاهانه و هدفمند
  ========================================= */

  // سوال ۱۰
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۰. پذیرش بیماری MS و درک مزمن بودن آن در کنترل بیماری موثر است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q10" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q10" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q10" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q10" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q10" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۱
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۱. استفاده از مواد غذایی با طبع گرم، می‌تواند در کنترل بیماری MS موثر باشد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q11" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q11" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q11" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q11" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q11" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۲
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۲. استفاده از داروهای تقویتی و مکمل، می‌تواند در کنترل بیماری موثر باشد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q12" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q12" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q12" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q12" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q12" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۳
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۳. برای کنترل بیماری، آب با دمای متعادل جهت استحمام استفاده می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q13" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q13" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q13" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q13" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q13" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۴
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۴. انجام یوگا و مدیتیشن، باعث می‌شود بیماری MS بهتر تحت کنترل باشد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q14" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q14" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q14" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q14" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q14" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۵
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۵. از طریق گوش دادن به پیام‌های انگیزشی، خواندن کتاب و شرکت در کلاس‌های مختلف، بیماری‌ام را کنترل می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q15" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q15" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q15" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q15" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q15" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۶
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۶. برای پیشگیری از بدتر شدن حالم، از گرسنه شدنم خودداری می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q16" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q16" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q16" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q16" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q16" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۷
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۷. اینکه آینده بیماری چه می‌شود، به خدا توکل می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q17" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q17" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q17" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q17" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q17" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۸
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۸. برای کنترل بیماری‌ام در طبیعت گردش می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q18" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q18" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q18" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q18" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q18" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۱۹
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۱۹. توانایی کنترل افکار و احساسات در پیشگیری از عود بیماری اهمیت دارد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q19" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q19" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q19" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q19" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q19" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۰
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۰. در مواجهه با مسائل خشونت‌آمیز، خشم خود را کنترل کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q20" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q20" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q20" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q20" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q20" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۱
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۱. برای کنترل بیماری، موقعیت‌های استرس‌زا را ترک کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q21" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q21" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q21" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q21" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q21" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۲
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۲. به دلیل تاثیر عوارض بیماری بر کاهش تمایلات جنسی، اقدامات مراقبتی و درمانی مربوطه را انجام می‌دهم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q22" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q22" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q22" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q22" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q22" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۳
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۳. برای کنترل بیماری، مکمل‌های (ویتامین D و غیره) پیشنهاد شده توسط پزشک را استفاده می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q23" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q23" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q23" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q23" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q23" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۴
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۴. توصیه‌های پزشک را در مورد مصرف دارو رعایت می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q24" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q24" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q24" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q24" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q24" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۵
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۵. درباره بیماری‌ام مثبت فکر می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q25" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q25" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q25" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q25" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q25" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۶
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۶. برای دوری از احساس سربار بودن، اقدام به انجام رفتارهای مراقبتی و درمانی کردم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q26" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q26" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q26" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q26" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q26" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۷
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۷. از حضور در مکان‌های شلوغ خودداری می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q27" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q27" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q27" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q27" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q27" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۸
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۸. با استفاده از برنامه‌های تلویزیونی و رادیویی، می‌توان اطلاعات مفیدی جهت مراقبت کسب کرد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q28" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q28" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q28" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q28" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q28" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۲۹
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۲۹. با دوری از پیام‌ها و خبرهای منفی، بیماری‌ام را کنترل می‌کنم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q29" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q29" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q29" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q29" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q29" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳۰
  `
  <div class="question-box">
    <h2>گرایش به مراقبت آگاهانه و هدفمند</h2>
    <div class="form-group">
      <label>۳۰. افکارم را تحت کنترل دارم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q30" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q30" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q30" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q30" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q30" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,
  // سوال ۳۱
  `
  <div class="question-box">
    <h2>کاهلی در مراقبت</h2>
    <div class="form-group">
      <label>۳۱. سختی انجام اقدامات پیشگیرانه در کاهش انگیزه جهت خودمراقبتی موثر است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q31" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q31" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q31" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q31" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q31" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳۲
  `
  <div class="question-box">
    <h2>کاهلی در مراقبت</h2>
    <div class="form-group">
      <label>۳۲. سردرگمی در دریافت خدمات درمانی، در کاهش انگیزه برای خودمراقبتی موثر است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q32" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q32" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q32" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q32" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q32" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳۳
  `
  <div class="question-box">
    <h2>کاهلی در مراقبت</h2>
    <div class="form-group">
      <label>۳۳. زمانبر بودن انجام اقدامات پیشگیرانه در کاهش انگیزه جهت خودمراقبتی موثر است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q33" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q33" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q33" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q33" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q33" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳۴
  `
  <div class="question-box">
    <h2>کاهلی در مراقبت</h2>
    <div class="form-group">
      <label>۳۴. جواب نگرفتن برخی بیماران از اقدامات پیشگیرانه، انگیزه ام را برای انجام رفتارهای مراقبتی کاهش می دهد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q34" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q34" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q34" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q34" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q34" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳۵
  `
  <div class="question-box">
    <h2>کاهلی در مراقبت</h2>
    <div class="form-group">
      <label>۳۵. فشار خانواده ، در انجام اقدامات پیشگیرانه موثر است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q35" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q35" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q35" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q35" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q35" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳۶
  `
  <div class="question-box">
    <h2>کاهلی در مراقبت</h2>
    <div class="form-group">
      <label>۳۶. فشار بیماری، در انجام اقدامات پیشگیرانه موثر است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q36" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q36" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q36" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q36" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q36" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳۷
  `
  <div class="question-box">
    <h2>کاهلی در مراقبت</h2>
    <div class="form-group">
      <label>۳۷. هزینه های درمانی، یکی از موانع انجام رفتارهای مراقبت از خود است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q37" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q37" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q37" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q37" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q37" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۳۸
  `
  <div class="question-box">
    <h2>کاهلی در مراقبت</h2>
    <div class="form-group">
      <label>۳۸. بالا بودن هزینه های ورزشی، مراقبت از خود را سخت می کند.</label>
      <div class="radio-group">
        <label><input type="radio" name="q38" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q38" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q38" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q38" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q38" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,
  // سوال ۳۹
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۳۹. کاهش اقدامات مراقبتی، باعث پیشرفت بیماری می شود.</label>
      <div class="radio-group">
        <label><input type="radio" name="q39" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q39" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q39" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q39" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q39" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴۰
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۴۰. احساس وابستگی به دارو، گرایش به دریافت خدمات درمانی را افزایش می دهد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q40" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q40" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q40" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q40" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q40" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴۱
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۴۱. طولانی شدن بیماری MS، باعث تغییر در سبک زندگی می شود.</label>
      <div class="radio-group">
        <label><input type="radio" name="q41" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q41" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q41" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q41" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q41" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴۲
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۴۲. کاهش حملات با انجام اقدامات درمانی، درگرایش به دریافت خدمات درمانی مهم است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q42" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q42" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q42" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q42" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q42" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴۳
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۴۳. برای کنترل حملات بیماری، به اقدامات درمانی روی آوردم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q43" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q43" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q43" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q43" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q43" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴۴
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۴۴. مزمن و همیشگی بودن بیماری باعث می شود در دریافت دارو اهتمام داشته باشم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q44" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q44" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q44" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q44" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q44" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴۵
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۴۵. ناشناخته و مبهم بودن عوارض بیماری MS، درگرایش به دریافت خدمات درمانی مهم است.</label>
      <div class="radio-group">
        <label><input type="radio" name="q45" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q45" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q45" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q45" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q45" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴۶
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۴۶. توانایی تصمیم گیری، جهت انتخاب روش های درمانی توصیه شده را دارم.</label>
      <div class="radio-group">
        <label><input type="radio" name="q46" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q46" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q46" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q46" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q46" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,

  // سوال ۴۷ (سوال آخر)
  `
  <div class="question-box">
    <h2>گرایش به دریافت خدمات درمانی</h2>
    <div class="form-group">
      <label>۴۷. ترس و عدم اطمینان از موثر بودن این اقدامات درمانی روند اتخاذ را به تاخیر می اندازد.</label>
      <div class="radio-group">
        <label><input type="radio" name="q47" value="کاملا مخالفم"> کاملاً مخالفم</label>
        <label><input type="radio" name="q47" value="مخالفم"> مخالفم</label>
        <label><input type="radio" name="q47" value="نه مخالفم و نه موافق"> نه مخالفم و نه موافق</label>
        <label><input type="radio" name="q47" value="موافقم"> موافقم</label>
        <label><input type="radio" name="q47" value="کاملا موافقم"> کاملاً موافقم</label>
      </div>
    </div>
  </div>
  `,
 
];

/* =========================================
   توابع ناوبری و مدیریت پرسشنامه
========================================= */

/* =========================================
   توابع ناوبری، اعتبارسنجی و نوار پیشرفت
========================================= */

/* =========================================
   توابع جدید: حفظ پاسخ‌ها + ارسال به Formspree
========================================= */

var userAnswers = userAnswers || {};

// ۱. ذخیره پاسخ‌های صفحه فعلی
function saveCurrentAnswers() {
  const container = document.getElementById("question-container");
  if (!container) return;

  const inputs = container.querySelectorAll("input, select, textarea");
  inputs.forEach((input, index) => {
    const keyName = input.name || `question_${currentQuestion + 1}_field_${index + 1}`;

    if (input.type === "radio") {
      if (input.checked) {
        userAnswers[keyName] = input.value;
      }
    } else if (input.type === "checkbox") {
      if (input.checked) {
        userAnswers[keyName + "_" + input.value] = "بله";
      }
    } else {
      if (input.value.trim() !== "") {
        userAnswers[keyName] = input.value;
      }
    }
  });
}

// ۲. بازیابی پاسخ‌های قبلی
function restoreAnswers() {
  const container = document.getElementById("question-container");
  if (!container) return;

  const inputs = container.querySelectorAll("input, select, textarea");
  inputs.forEach((input, index) => {
    const keyName = input.name || `question_${currentQuestion + 1}_field_${index + 1}`;

    if (input.type === "radio") {
      if (userAnswers[keyName] === input.value) {
        input.checked = true;
      }
    } else if (input.type === "checkbox") {
      if (userAnswers[keyName + "_" + input.value]) {
        input.checked = true;
      }
    } else if (userAnswers[keyName] !== undefined) {
      input.value = userAnswers[keyName];
    }
  });
}

// ۳. رندر کردن سوال
function renderQuestion() {
  const container = document.getElementById("question-container");
  if (!container || !questions || !questions[currentQuestion]) return;

  container.innerHTML = questions[currentQuestion];
  restoreAnswers();

  const prevBtn = document.getElementById("prev-btn");
  if (prevBtn) {
    prevBtn.disabled = (currentQuestion === 0);
  }
  
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    if (currentQuestion === questions.length - 1) {
      nextBtn.innerText = "ثبت نهایی";
    } else {
      nextBtn.innerText = "بعدی";
    }
  }

  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  if (progressBar) {
    const progressPercent = Math.round(((currentQuestion + 1) / questions.length) * 100);
    progressBar.style.width = progressPercent + "%";
    if (progressText) {
      progressText.innerText = progressPercent + "%";
    }
  }
}

// ۴. شروع پرسشنامه
function startQuestionnaire() {
  const welcomeBox = document.querySelector(".welcome-box");
  if (welcomeBox) welcomeBox.style.display = "none";
  
  const progressWrapper = document.getElementById("progress-wrapper");
  if (progressWrapper) progressWrapper.style.display = "block";
  
  const qContainer = document.getElementById("question-container");
  if (qContainer) qContainer.style.display = "block";
  
  const navBtns = document.getElementById("navigation-buttons");
  if (navBtns) navBtns.style.display = "flex";
  
  renderQuestion();
}

// ۵. دکمه بعدی و ارسال نهایی
function nextQuestion() {
  const container = document.getElementById("question-container");
  
  const radios = container.querySelectorAll('input[type="radio"]');
  if (radios.length > 0) {
    const isRadioChecked = Array.from(radios).some(radio => radio.checked);
    if (!isRadioChecked) {
      alert("لطفاً ابتدا یک گزینه را انتخاب کنید.");
      return;
    }
  }

  const selects = container.querySelectorAll('select');
  for (let select of selects) {
    if (select.value === "") {
      alert("لطفاً یکی از گزینه‌ها را انتخاب کنید.");
      return;
    }
  }

  const textInputs = container.querySelectorAll('input[type="number"], input[type="text"]');
  for (let input of textInputs) {
    if (input.placeholder && input.placeholder.includes("توضیحات")) continue;
    if (input.value.trim() === "") {
      alert("لطفاً فیلد مربوطه را تکمیل کنید.");
      return;
    }
  }

  saveCurrentAnswers();

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.innerText = "در حال ارسال...";
    nextBtn.disabled = true;

    fetch("https://formspree.io/f/xgawvayv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userAnswers)
    })
    .then(response => {
      if (response.ok) {
        alert("پرسشنامه با موفقیت ثبت و ارسال شد! متشکریم.");
        location.reload();
      } else {
        alert("خطا در ارسال. لطفاً مجدداً دکمه ثبت را بزنید.");
        nextBtn.innerText = "ثبت نهایی";
        nextBtn.disabled = false;
      }
    })
    .catch(error => {
      alert("ارتباط برقرار نشد. اینترنت خود را بررسی کنید.");
      nextBtn.innerText = "ثبت نهایی";
      nextBtn.disabled = false;
    });
  }
}

// ۶. دکمه قبلی
function prevQuestion() {
  if (currentQuestion > 0) {
    saveCurrentAnswers();
    currentQuestion--;
    renderQuestion();
  }
}