<template>
    <v-container fluid>
        <v-layout column align-center>
            <v-card class="mx-auto m-b-20" width="344">
                <v-flex xs12>
                    <v-list-item-avatar color="grey darken-3">
                        <v-img class="elevation-6"
                               src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                    </v-list-item-avatar>
                    <span class="title font-weight-light">Gabriel</span>
                </v-flex>
                <!--<v-card-title>
                    <v-list-item-avatar color="grey darken-3">
                        <v-img class="elevation-6"
                               src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                    </v-list-item-avatar>
                    <span class="title font-weight-light">Gabriel</span>
                </v-card-title>-->
                <v-img src="@/assets/mountain_fox_notebook.jpg"
                       height="200px">
                    <span>
                        Mountain fox notebook
                    </span>
                </v-img>
                <v-card-actions>
                    <v-btn text>
                        <v-icon>mdi-currency-eur</v-icon>12.90
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="chat = !chat">
                        <v-icon>mdi-chat-outline</v-icon>
                        <span class="subheading">{{countChat}}</span>
                    </v-btn>
                    <v-btn icon @click="incrementLikes" v-bind:class="{ active: countLike>0 }">
                        <v-icon v-show="!(countLike>0)">mdi-heart-outline</v-icon>
                        <v-icon v-show="countLike>0">mdi-heart</v-icon>
                        <span class="subheading like" v-show="countLike>0">{{countLike}}</span>
                    </v-btn>
                </v-card-actions>
                <transition-group name="fade" appear mode="out-in">
                    <div v-show="chat" key="countChat">
                        <child v-on:loaded="chat = false">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-form ref="form" v-model="valid">
                                    <v-text-field label="comment" ref="comment" type="text"
                                                  :append-icon="'mdi-send'"
                                                  v-model="comment" @click:append="addComment">
                                    </v-text-field>
                                </v-form>
                            </v-card-text>
                        </child>
                    </div>
                </transition-group>
            </v-card>
            <v-card class="mx-auto m-b-20" width="344">
                <v-flex xs12>
                    <v-list-item-avatar color="grey darken-3">
                        <v-img class="elevation-6"
                               src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                    </v-list-item-avatar>
                    <span class="title font-weight-light">Gabriel</span>
                </v-flex>
                <v-img src="@/assets/brown_bear_cushion.jpg"
                       height="200px">
                    <span>
                        Brown bear cushion
                    </span>
                </v-img>
                <v-card-actions>
                    <v-btn text>
                        <v-icon>mdi-currency-eur</v-icon>18.90
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-chat-outline</v-icon>
                    </v-btn>
                    <v-btn icon class="active">
                        <v-icon>mdi-heart</v-icon>                        
                        <span class="subheading like">1</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="mx-auto m-b-20" width="344">
                <v-flex xs12>
                    <v-list-item-avatar color="grey darken-3">
                        <v-img class="elevation-6"
                               src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                    </v-list-item-avatar>
                    <span class="title font-weight-light">Elysa</span>
                </v-flex>
                <v-img src="@/assets/hummingbird_cushion.jpg"
                       height="200px">
                    <span>
                        Hummingbird cushion
                    </span>
                </v-img>
                <v-card-actions>
                    <v-btn text>
                        <v-icon>mdi-currency-eur</v-icon>18.90
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-chat-outline</v-icon>
                    </v-btn>
                    <v-btn icon class="active">
                        <v-icon>mdi-heart</v-icon>
                        <span class="subheading like">3</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                comment: null,
                valid: true,
                show: false,
                chat: false,
                countChat: 1,
                countLike: 0,
            }
        },
        methods: {
            doSubmit(e) {
                if (e.keyCode === 13) {
                    // add comment code
                }
            },
            incrementLikes() {
                this.countLike++;
            },
            addComment() {
                 this.countChat++;
            },
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .v-image span {
        position: absolute;
        left: 20px;
        color: white;
        bottom: 10px;
    }

    .v-icon.v-icon {
        font-size: 16px;
    }

    .m-tb-20 {
        margin: 20px 0;
    }

    .m-t-20 {
        margin-top: 20px;
    }

    .m-b-20 {
        margin-bottom: 20px;
    }

    .subheading {
        position: absolute;
        font-size: 12px;
    }

    .like {
        color: #fff;
    }

    button.v-btn.v-btn--flat.v-btn--icon.v-btn--round.theme--light.v-size--default.active {
        color: red;
    }
</style>
