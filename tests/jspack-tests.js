// Struct.pack
Tinytest.add('Struct - pack - char[] (a)', function (test) {
  test.equal(Struct.pack('a', ['a', 'b']) ,[]) ;
});
Tinytest.add('Struct - pack - char (c)', function (test) {
  test.equal(Struct.pack('2c', ['a', 'b']), [97, 98]);
});
Tinytest.add('Struct - pack - signed char (b)', function (test) {
  test.equal(Struct.pack('b', [-129]), [128]);
  test.equal(Struct.pack('b', [129]), [127]);
});
Tinytest.add('Struct - pack - unsigned char (B)', function (test) {
  test.equal(Struct.pack('B', [129]), [129]);
  test.equal(Struct.pack('B', [-129]), [0]);
});
Tinytest.add('Struct - pack - signed short (h)', function (test) {
  test.equal(Struct.pack('h', [32769]), [127, 255]);
  test.equal(Struct.pack('h', [-32769]), [128, 0]);
});
Tinytest.add('Struct - pack - unsigned short (H)', function (test) {
  test.equal(Struct.pack('H', [32769]), [128, 1]);
  test.equal(Struct.pack('H', [-32769]), [0, 0]);
});
Tinytest.add('Struct - pack - signed long (i)', function (test) {
  test.equal(Struct.pack('i', [-256]), [255,255,255,0]);
  test.equal(Struct.pack('i', [256]), [0,0,1,0]);
});
Tinytest.add('Struct - pack - unsigned long (I)', function (test) {
  test.equal(Struct.pack('I', [256]), [0,0,1,0]);
  test.equal(Struct.pack('I', [-256]), [0,0,0,0]);
});
Tinytest.add('Struct - pack - signed long (l)', function (test) {
  test.equal(Struct.pack('l', [256]), [0,0,1,0]);
  test.equal(Struct.pack('l', [-256]), [255,255,255,0]);
});
Tinytest.add('Struct - pack - unsigned long (L)', function (test) {
  test.equal(Struct.pack('L', [256]), [0,0,1,0]);
  test.equal(Struct.pack('L', [-256]), [0,0,0,0]);
});
Tinytest.add('Struct - pack - char[] (s)', function (test) {
  test.equal(Struct.pack('5s', ['bacon']), [98,97,99,111,110]);
});
Tinytest.add('Struct - pack - float (f)', function (test) {
  test.equal(Struct.pack('f', 0.99), [127,128,0,1]);
});
Tinytest.add('Struct - pack - double (d)', function (test) {
  test.equal(Struct.pack('d', 447737727777), [127,240,0,0,0,0,0,1]);
});

// Struct.unpack
Tinytest.add('Struct - unpack - char (c)', function (test) {
  test.equal(Struct.unpack('2c', [97, 98]), ['a', 'b']);
});
Tinytest.add('Struct - unpack - signed char (b)', function (test) {
  test.equal(Struct.unpack('b', [128]), [-128]);
  test.equal(Struct.unpack('b', [127]), [127]);
});
Tinytest.add('Struct - unpack - unsigned char (B)', function (test) {
  test.equal(Struct.unpack('B', [129]), [129]);
});
Tinytest.add('Struct - unpack - signed short (h)', function (test) {
  test.equal(Struct.unpack('h', [127, 255]), [32767]);
  test.equal(Struct.unpack('h', [128, 0]), [-32768]);
});
Tinytest.add('Struct - unpack - unsigned short (H)', function (test) {
  test.equal(Struct.unpack('H', [128, 1]), [32769]);
});
Tinytest.add('Struct - unpack - signed long (i)', function (test) {
  test.equal(Struct.unpack('i', [255,255,255,0]), [-256]);
  test.equal(Struct.unpack('i', [0,0,1,0]), [256]);
});
Tinytest.add('Struct - unpack - unsigned long (I)', function (test) {
  test.equal(Struct.unpack('I', [0,0,1,0]), [256]);
});
Tinytest.add('Struct - unpack - signed long (l)', function (test) {
  test.equal(Struct.unpack('l', [0,0,1,0]), [256]);
  test.equal(Struct.unpack('l', [255,255,255,0]), [-256]);
});
Tinytest.add('Struct - unpack - unsigned long (L)', function (test) {
  test.equal(Struct.unpack('L', [0,0,1,0]), [256]);
});

// Struct.calclength
Tinytest.add('Struct - calcLength - char[] (A)', function (test) {
  test.equal(Struct.calcLength('A'), 1);
});
Tinytest.add('Struct - calcLength - char (c)', function (test) {
  test.equal(Struct.calcLength('c'), 1);
});
Tinytest.add('Struct - calcLength - signed char (b)', function (test) {
  test.equal(Struct.calcLength('b'), 1);
});
Tinytest.add('Struct - calcLength - unsigned char (B)', function (test) {
  test.equal(Struct.calcLength('B'), 1);
});
Tinytest.add('Struct - calcLength - signed short (h)', function (test) {
  test.equal(Struct.calcLength('h'), 2);
});
Tinytest.add('Struct - calcLength - unsigned short (H)', function (test) {
  test.equal(Struct.calcLength('H'), 2);
});
Tinytest.add('Struct - calcLength - signed long (i)', function (test) {
  test.equal(Struct.calcLength('i'), 4);
});
Tinytest.add('Struct - calcLength - unsigned long (I)', function (test) {
  test.equal(Struct.calcLength('I'), 4);
});
Tinytest.add('Struct - calcLength - signed long (l)', function (test) {
  test.equal(Struct.calcLength('l'), 4);
});
Tinytest.add('Struct - calcLength - unsigned long (L)', function (test) {
  test.equal(Struct.calcLength('L'), 4);
});
Tinytest.add('Struct - calcLength - char[] (s)', function (test) {
  test.equal(Struct.calcLength('s'), 1);
});
Tinytest.add('Struct - calcLength - float (f)', function (test) {
  test.equal(Struct.calcLength('f'), 4);
});
Tinytest.add('Struct - calcLength - double (d)', function (test) {
  test.equal(Struct.calcLength('d'), 8);
});
