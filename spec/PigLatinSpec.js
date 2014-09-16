describe("Jasmine Test Runner", function() {

  it("Runs", function() {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(42).toEqual(42);
  });

  describe("Pig Latin", function() {

    beforeEach(function() {
      // any startup code goes here
    });

    it("add 'way' to end of word that begins and ends with vowels", function() {
      expect(PigLatin.say('echo')).toEqual('echoway');
    });
    
    it("add 'ay' to end of word that begins with vowel and ends in a consonant", function() {
      expect(PigLatin.say('eight')).toEqual('eightay');
    });
    
    it("empty string stays empty", function() {
      expect(PigLatin.say('')).toEqual('');
    });
    
    it("move beginning consonant to the end and add 'ay'", function(){
      expect(PigLatin.say("pizza")).toEqual("izzapay");
    });
    
    it("move multiple consonants to end + 'ay'", function(){
      expect(PigLatin.say("school")).toEqual("oolschay");
    });
    
  });

});
