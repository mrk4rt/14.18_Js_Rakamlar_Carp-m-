
# Rakamların Çarpımı Projesi

## Proje Amacı:
Bu proje, kullanıcıdan alınan bir sayının rakamlarının çarpımını hesaplayan bir program geliştirmeyi amaçlar. Kullanıcıdan alınan sayının her bir basamağı alınarak, bu rakamların çarpımı hesaplanır ve sonuç ekrana yazdırılır.

## Değişkenler:
- **sayı**: Kullanıcıdan alınan tam sayı.
- **rakam**: Sayının her bir basamağını temsil eder.
- **çarpım**: Rakamların çarpımını tutar.
- **geçici**: Sayıyı 10'a bölerek her bir rakama ulaşmayı sağlar.

## Anahtar Kelimeler:
- **parseInt**: String türündeki bir sayıyı tamsayıya dönüştürmek için kullanılır.
- **while**: Sayının her bir rakamını almak için döngü kullanılır.
- **mod**: Sayının son basamağını almak için kullanılır (yani 10 ile bölümünden kalan).
- **Math**: Çeşitli matematiksel hesaplamalar için kullanılır.

## Proje Adımları:

### 1. Kullanıcıdan Sayı Alınması:
İlk adım olarak, kullanıcıdan bir tam sayı alınır. Bu sayı, kullanıcı tarafından klavye aracılığıyla girilecektir. Kullanıcının geçerli bir sayı girmesi sağlanmalıdır (Örneğin, negatif sayılar veya sıfır kontrol edilip uygun mesaj gösterilebilir).

### 2. Çarpım Değişkeni Tanımlanması:
Kullanıcının girdiği sayının rakamlarının çarpımını tutmak için bir **çarpım** değişkeni tanımlanır. Başlangıçta bu değişken 1 olarak atanır, çünkü çarpma işlemine başlanmadan önce çarpan 1 olmalıdır.

### 3. Sayının Rakamlarının Alınması (While Döngüsü ile):
**while** döngüsü kullanılarak sayının her bir basamağı alınacaktır. Döngü, sayının sonuna ulaşılana kadar devam eder. Her döngüde, sayının son rakamı alınır (sayının 10'a bölümünden kalan) ve **rakam** değişkeni olarak saklanır. Ardından, bu rakam **çarpım** değişkeni ile çarpılır ve **çarpım** değişkenine atanır. Sayı 10'a bölünerek bir sonraki basamağa geçilir.

### 4. Sayının Rakamları ile Çarpımın Hesaplanması:
Her rakam alındıktan sonra çarpım değişkenine eklenir. Bu işlem, sayının tüm rakamları için döngü devam eder. Örneğin, 234 sayısı için:
- İlk basamağı (2) alır ve **çarpım = 1 * 2 = 2**.
- İkinci basamağı (3) alır ve **çarpım = 2 * 3 = 6**.
- Üçüncü basamağı (4) alır ve **çarpım = 6 * 4 = 24**.

### 5. Sonucun Gösterilmesi:
Sonuç olarak elde edilen **çarpım** değeri ekrana yazdırılır. Kullanıcıya, sayının rakamlarının çarpımının ne olduğu hakkında bilgi verilir.

### 6. Geçerli ve Hatalı Girdi Kontrolü (Opsiyonel):
Girdi olarak sadece pozitif bir tam sayı alınmalıdır. Eğer kullanıcı negatif bir sayı veya geçerli olmayan bir değer girerse, hata mesajı gösterilir ve tekrar doğru bir değer girmesi istenir.
