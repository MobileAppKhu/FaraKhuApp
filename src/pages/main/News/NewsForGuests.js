import React from 'react'
import {View, Pressable, ScrollView, ImageBackground} from 'react-native'
import CustomIcon from '../../../components/CustomIcon'
import Typography from '../../../components/Typography'
import useStyles from './stylesheet'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from "react-redux";
export default function NewsForGuests() {
  const {theme: palette} = useSelector((state) => state.authReducer)
  const androidRipple = {borderless: true, color: '#ddd', radius: 25}
  const navigation = useNavigation()
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/my-course-test.jpg')}
        style={styles.root}>
        <View style={styles.moreOption}>
          <Pressable
            onPress={() => navigation.goBack()}
            android_ripple={androidRipple}>
            <CustomIcon
              name="icons8_back-1-False"
              size={30}
              color={palette.M_3_SYS_INVERSE_ON_SURFACE}
            />
          </Pressable>
        </View>
        <View style={styles.information}>
          <Typography variant="h3" color={palette.M_3_SYS_ON_PRIMARY}>
            اختتامیه اولین مسابقه ملی ایده های زیست فناوری
          </Typography>
        </View>
      </ImageBackground>

      <View style={styles.AnnouncementDetails}>
        <View style={styles.AnnouncementDetailsButton}>
          <Pressable
            android_ripple={{
              color: palette.M_3_SYS_SURFACE_VARIANT,
              radius: 30,
              borderless: true
            }}>
            <CustomIcon
              name="icons8_left_send"
              size={24}
              color={palette.M_3_REF_PRIMARY_PRIMARY_0}
            />
          </Pressable>
        </View>
        <View style={{marginHorizontal: 16}}>
          <Typography
            style={{marginBottom: 8}}
            variant="medium12"
            color={palette.M_3_SYS_OUTLINE}>
            تاریخ ارسال:20ابان 1400
          </Typography>
          <ScrollView>
            <Typography
              variant="smallButton"
              color={palette.M_3_SYS_ON_BACKGROUND}>
              انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های
              زیست فناورانه را برگزار کرد دانشجویان زیست فناوری در اولین مسابقه
              ملی ایده های زیست فناورانه درخشیدند به گزارش روابط عمومی دانشگاه
              خوارزمی، اختتامیه اولین مسابقه ملی ایده های زیست فناورانه باحضور
              دکتر داریوش فرهود پدر علم ژنتیک ایران ، اساتید علمی و منتورهای
              تجاری و معرفی تیم های برگزیده در دانشگاه خوارزمی (پردیس کرج) روز
              دوشنبه ۲۲ آذرماه برگزار شد. انجمن علمی بیوتکنولوژی دانشگاه خوارزمی
              در سال ۱۳۹۷ توسط دانشجویان خلاق و فعال تشکیل شد. این انجمن پیشنهاد
              برگزاری مسابقه ایده های زیست فناورانه را با هدف پیوند دادن علم و
              صنعت ارائه دادند. این مسابقه که برای اولین بار و در سطح با مشارکت
              تیم هایی از دانشگاههای سراسر کشور و علوم پزشکی برگزار شد در سه
              مرحله به اجرا درآمد مرحله اول در تاریخ ۶ ماه الی ۲۵ شهریورماه
              ۱۴۰۰با فراخوان ارسال ایده ها آغاز شد. در این فرایند شرکت کنندگان
              پس از تیم سازی و ارائه پروژه و پس از بررسی اساتید و منتورهای ملی و
              بین المللی داوری شدند که در نتیجه این داوری از ۵۶ پروپوزال ارسال
              شده در حوزه های بیوتکنولوژی پزشکی، بیوتک کشاورزی، بیوتک میکروبی،
              بیوانفورماتیک، نانو بیوتکنولوژی، بیوتک محیطی، بیوتک دریا ۲۱طرح
              پذیرفته شد، در نتیجه داوری پایانی این رویداد تیم دانشجویی در حوزه
              زیست فناوری پزشکی با اخذ رتبه دوم با عنوان طرح ساخت کیت تشخیصی
              سرطان لوسمی حاد شایع در کودکان ۵ تا ۷ سال از مایعات بدن با استفاده
              از پلاکت تحت آموزش تومور و پیاده سازی - در حوزه زیست فناوری پزشکی
              تیم دانشجویی با اخذ رتبه سوم با عنوان طرح پچ قلبی ساخته شده با روش
              پرینت سه بعدی برای درمان سکته قلبی، - درحوزه نانو بیوتکنولوژی تیم
              دانشجویی با اخذ رتبه سوم با عنوان طرح ساخت زخمپوش نانو الیافی سه
              لایه برپایه پلیکاپر و لاکتون/کربوکسی متیل سلولز/کیتوسان، حاوی
              اسانس گیاه نعنا فلفلی و نانو ذرات سلنیم در لایه کیتوسان برای کمک
              به ترمیم زخم سوختگی -در حوزه زیست فناوری پزشکی، تیم دانشجویی با
              اخذ رتبه سوم با عنوان طرح تشخیص زود هنگام بیماری الزایمر با
              استفاده از سنسور بیوالکتروشیمیایی -در حوزه زیست فناوری میکروبی و
              صنعتی، تیم دانشجویی با عنوان طرح افزایش تولید داروی ضد سرطان پاکلی
              تاکسل در روش تخمیر میکروبی با استفاده از آنتی بیوتیک طبیعی عصاره
              دارچین موفق به کسب رتبه سوم این مسابقه شد. لازم به ذکر است داوران
              این مسابقه تیمی را به عنوان رتبه اول انتخاب نکردند. در این مراسم،
              معاون فرهنگی و اجتماعی دانشگاه خوارزمی، معاون نماینده مقام معظم
              رهبری در دانشگاه، نمایندگان شرکت های سیناژن، شتابدهنده حضور
              داشتند. دکتر تهامی، معاون فرهنگی و اجتماعی ضمن خیرمقدم به
              دانشجویان نخبه و حاضرین جلسه اظهار داشت: عظمت انقلاب اسلامی در گرو
              استقلال اقتصادی است و گام های که شما نخبگان بر می دارید حرکت به
              این سمت می باشد. وی تاکید داشت: مسئولین باید این برنامه ها و
              رویدادهای مبارک را تقویت کنند و از قشر نخبه حمایت نماییم. دکتر
              تهامی گفت: انجمن های علمی یکی از مکان هایی است که فعالیت های
              خلاقانه و نوآوری ها در آن جا تقویت می شود و هر زمان که اساتید با
              انجمن های علمی همراه شدند و در پیشبرد علم همکاری داشتند، شاهد
              پیشرفت ها و ابداعات علمی موثری برای کشور شدیم. سپس حجت الاسلام و
              المسلمین حاج آقا فیاض ، معاون نمایده دفتر مقام معظم رهبری در
              دانشگاه خوارزمی گفت: علم اقتدار است و این اقتدار در سایر عرصه های
              تاثیرگذار است و ما با اقتدار علمی می توانیم در سطح جامعه بین
              المللی برای کشورمان افتخار آفرین باشیم. وی عنوان کرد: علم نور است
              و علمی مورد رضایت خداوند متعال است که در خدمت جامعه باشد. در ادامه
              خانم دکتر دیوسالار، مدیرفرهنگی دانشگاه خوارزمی، به بیان توضیحاتی
              در خصوص نحوه برگزاری مسابقه ایده های زیست فناورانه پرداخت و گزارشی
              از اهداف برگزاری مسابقه ، ترکیب کمیته های علمی و اجرایی، تعداد
              پروپوزال های دریافتی و پذیرفته شده و .. ارائه داد. سپس دکتر درایوش
              فرهود، پدرعلم ژنتیک ایران ضمن ابراز خرسندی از حضور در جمع
              دانشجویان نخبه گفت : من نسبت به این دعوت استقبال کردم و اشتیاق
              داشتم و حضور در میان نخبگان برای من رسالت است. دکتر فرهود
              اظهارداشت: دانشگاه ها باید از نسل اول و دوم که آموزش صرف و پژوهش
              برای پژوهش است به دانشگاه های نسل سوم ، چهارم و پنجم تبدیل شوند.
              وی از اجرایی نشدن پایان نامه ها اظهار تاسف کرد و گفت: پایان نامه
              ها باید کاربردی شوند و مورد بهره برداری قرار گیرند. پدر علم ژنتیک
              ایران تاکید کرد: باید از فرار ژن ها جلوگیری کرد و زمینه ها و
              بسترهای مناسب را برای مانایی نخبگان در کشور فراهم نمود. وی در
              پایان از شرکت های تجاری که ا ین رویداد را پشتیبانی کردند تشکر و
              قدردانی کرد. این مراسم با اهداء لوح تقدیر و جوایز از تیم های برتر
              مسابقه، داوران و حامیان این رویداد به پایان یافت.
            </Typography>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
