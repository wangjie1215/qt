<template>
  <div >
   <!-- <textarea v-model="text"></textarea> -->
      <!-- {{text}} -->

     <div class="fwb" v-html="htmlVal">

      </div>

  </div>
</template>

<script>
  export default {
    data() {
             return {
               htmlVal:'<blockquote>asdfasdfsdsafasd<span class="ql-size-huge">adfasdfasdfasdf</span><s class="ql-size-huge"><u>sdafasd</u></s><em class="ql-size-huge"><s><u>asdfasdf</u></s></em><strong class="ql-size-huge"><s><u>asfasf</u></s></strong></blockquote>',
               text:'',
                        info: {},
                        baseUrl:'',
                        input: '',
                        editorContent: '',
                        editorText: '',



                    }
                },
    created:function(){
        debugger
             var url = this.axios.urls.SYS_LISTBYIDJOKE;
               console.log(url);
              this.axios.post(url).then(resp => {
                this.htmlVal=resp.data.result.contenthtml;
                console.log(resp.data.result.contenthtml);
                this.$router.param({
                  query: {
                    htmlVal: resp.data.result.contenthtml
                  },
                  });
              }).catch(resp => {
                     console.log(resp);
                     this.$message.error(resp.data.message);
                   });
           }
    }
</script>

<style>
</style>
