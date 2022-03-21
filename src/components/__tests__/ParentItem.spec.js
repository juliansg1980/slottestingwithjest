import { shallowMount } from "@vue/test-utils"
import ParentItem from '@/components/ParentItem.vue'

describe('ParentItem', () => {
    it('header slot', () => {
        const wrapper = shallowMount(ParentItem, {
            slots: {
                content: '<span class="contentMocked">anyContent</span>'
            }
        })

        console.log(wrapper.html())
        expect(wrapper.find('.contentSpan').exists()).toBe(true)
        expect(wrapper.find('.contentMocked').exists()).toBe(true)
    })
})