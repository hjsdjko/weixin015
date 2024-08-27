package com.cl.entity.view;

import com.cl.entity.QucandianEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 取餐点
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-03-30 10:32:12
 */
@TableName("qucandian")
public class QucandianView  extends QucandianEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public QucandianView(){
	}
 
 	public QucandianView(QucandianEntity qucandianEntity){
 	try {
			BeanUtils.copyProperties(this, qucandianEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
