<?php
/**
 *
 * @category    Mage
 * @package     Frontlinedev_Gumby
 */


/**
 * Product options text type block
 *
 * @category   Mage
 * @package    Frontlinedev_Gumby
 * @author     Jason Tipton - Frontlinedev <jason@frontlinedev.com>
 */
class Frontlinedev_Gumby_Block_Product_View_Options_Type_Date extends Mage_Catalog_Block_Product_View_Options_Type_Date
{

    /**
     * Date (dd/mm/yyyy) html drop-downs
     *
     * @return string Formatted Html
     */
    public function getDropDownsDateHtml()
    {
        $fieldsSeparator = '&nbsp;';
        $fieldsOrder = Mage::getSingleton('catalog/product_option_type_date')->getConfigData('date_fields_order');
        $fieldsOrder = str_replace(',', $fieldsSeparator, $fieldsOrder);

        $monthsHtml = '<div><span class="field"><span class="picker">';
        $monthsHtml .= $this->_getSelectFromToHtml('month', 1, 12);
        $monthsHtml .= '</span></span>';

        $daysHtml = '<span class="field"><span class="picker">';
        $daysHtml .= $this->_getSelectFromToHtml('day', 1, 31);
        $daysHtml .= '</span></span>';

        $yearStart = Mage::getSingleton('catalog/product_option_type_date')->getYearStart();
        $yearEnd = Mage::getSingleton('catalog/product_option_type_date')->getYearEnd();
        $yearsHtml = '<span class="field"><span class="picker">';
        $yearsHtml .= $this->_getSelectFromToHtml('year', $yearStart, $yearEnd);
        $yearsHtml .= '</span></span></div>';        

        $translations = array(
            'd' => $daysHtml,
            'm' => $monthsHtml,
            'y' => $yearsHtml
        );
        return strtr($fieldsOrder, $translations);
    }

    /**
     * Time (hh:mm am/pm) html drop-downs
     *
     * @return string Formatted Html
     */
    public function getTimeHtml()
    {
        if (Mage::getSingleton('catalog/product_option_type_date')->is24hTimeFormat()) {
            $hourStart = 0;
            $hourEnd = 23;
            $dayPartHtml = '';
        } else {
            $hourStart = 1;
            $hourEnd = 12;
            $dayPartHtml = $this->_getHtmlSelect('day_part')
                ->setOptions(array(
                    'am' => Mage::helper('catalog')->__('AM'),
                    'pm' => Mage::helper('catalog')->__('PM')
                ))
                ->getHtml();
        }
        $hoursHtml = $this->_getSelectFromToHtml('hour', $hourStart, $hourEnd);
        $minutesHtml = $this->_getSelectFromToHtml('minute', 0, 59);

        return '<span class="field"><span class="picker">' . $hoursHtml . '</span></span>&nbsp;
                <span class="field"><span class="picker">' . $minutesHtml . '</span></span>&nbsp;
                <span class="field"><span class="picker">' . $dayPartHtml . '</span></span>';
    }

    /**
     * Return drop-down html with range of values
     *
     * @param string $name Id/name of html select element
     * @param int $from  Start position
     * @param int $to    End position
     * @param int $value Value selected
     * @return string Formatted Html
     */
    protected function _getSelectFromToHtml($name, $from, $to, $value = null)
    {
        $options = array(
            array('value' => '', 'label' => $name)
        );
        for ($i = $from; $i <= $to; $i++) {
            $options[] = array('value' => $i, 'label' => $this->_getValueWithLeadingZeros($i));
        }
        return $this->_getHtmlSelect($name, $value)
            ->setOptions($options)
            ->getHtml();
    }

}
